/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable, runInAction } from 'mobx';
import storeAction from '@storeAction';
import { callGetUserInfo } from '@api';
import * as io from 'socket.io-client';

const initState = {
    pcPeers: {},
    localStream: undefined,
    remoteList: {},
    socket: undefined,
    signalingState: "",
    iceConnectionState: "",
    pcConnectionState: "",
};
const api = {
    userInfo: callGetUserInfo
}
const configuration = {
    iceServers: [
        {
            urls: 'stun:stun.l.google.com:19302',
        }, {
            urls: 'stun:stun.xten.com',
        }],
};

class RoomStore extends storeAction {

    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action init = () => {
        runInAction(async () => {
            this.localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        })
        this.socket = io.connect("http://localhost:8080/");
        this.socket.on('exchange', data => {
            this.exchangePowerCall(data);
        });
        this.join()
    };
    @action join = () => {
        let callback = socketIds => {

            socketIds.forEach(async socketId => {

                await this.createPC(socketId);
            });
        };
        this.socket.emit('join', "testRoom", callback)
    };
    @action exchangePowerCall = async data => {

        const fromId = data.from;
        let pc;
        if (fromId in this.pcPeers) {
            pc = this.pcPeers[fromId];
        } else {
            pc = await this.createPC(fromId, false);
        }
        try {
            if (data.sdp) {
                let sdp = new RTCSessionDescription(data.sdp);
                console.log("pc>>>", pc)
                await pc.setRemoteDescription(sdp);
                if (pc.remoteDescription.type === 'offer') {
                    const description = await pc.createAnswer();
                    await pc.setLocalDescription(description);
                    this.socket.emit('exchange', { to: fromId, sdp: pc.localDescription });
                }
            } else if (data.candidate) {
                try {
                    await pc.addIceCandidate(data.candidate);
                } catch (e) {
                    console.error(e);
                }
            }
        } catch (err) {
            console.error(err);
        }
    };
    @action createPC = async (socketId) => {
        const peer = new RTCPeerConnection(configuration);
        runInAction(async () => {
            this.pcPeers[socketId] = peer;
            this.localStream?.getTracks()?.forEach(track => peer.addTrack(track, this.localStream));
        })
        const { signalingState, readyState } = peer;
        this.signalingState = signalingState || readyState;
        peer.onicecandidate = ({ candidate }) => {
            console.log("onicecandidate")
            console.log(candidate)
            if (candidate) {
                this.socket.emit('exchange', {
                    to: socketId, candidate,
                });
            }
        };
        peer.onnegotiationneeded = async () => {
            console.log("onnegotiationneeded")

            try {
                await peer.setLocalDescription(await peer.createOffer());

                this.socket.emit('exchange', { to: socketId, sdp: peer.localDescription });
            } catch (err) {
                console.error(err);
            }

        };
        peer.onconnectionstatechange = async () => {
            console.log("onconnectionstatechange")
            if (peer) {
                const { connectionState } = peer;
                console.log(`pc1 connection state change callback, state: ${connectionState}`);
                this.pcConnectionState = connectionState;
            }
        };
        peer.oniceconnectionstatechange = async () => {
            console.log("oniceconnectionstatechange")
            if (peer) {
                const { iceConnectionState } = peer;
                this.iceConnectionState = iceConnectionState;
            }
        };
        peer.onsignalingstatechange = async () => {
            if (peer) {
                const { signalingState, readyState } = peer;
                this.signalingState = signalingState || readyState;
            }
        };
        peer.ontrack = ({ streams }) => {
            console.log("ontrack")
            this.remoteList[socketId] = streams[0]
        };
        return peer;
    };


}

const store = new RoomStore();
export default store;


