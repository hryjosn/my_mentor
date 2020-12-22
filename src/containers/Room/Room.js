import React, { useEffect } from 'react';
// import { useRouter } from "next/router";
import { useStores } from "@store";
import { VideoContainer, Container } from "@/containers/Room/Room.styles";
import { observer } from 'mobx-react';

const Room = () => {
    // const router = useRouter();
    // const params = router.query.params || [];
    // const roomId = params[0];
    const { RoomStore } = useStores()
    const { localStream, remoteList, init, join, signalingState, iceConnectionState, pcConnectionState } = RoomStore;
    useEffect(() => {
        init();
    }, [])
    return (
        <Container>
            <div>
                <div>signalingState: {signalingState}</div>
                <div>iceConnectionState: {iceConnectionState}</div>
                <div>pcConnectionState: {pcConnectionState}</div>
            </div>

            <div>
                <button type="submit" onClick={() => {
                    join()
                }}>Join
                </button>
            </div>
            <VideoContainer>
                <video
                    ref={video => {
                        if (video) {
                            video.srcObject = localStream;
                        }
                    }}
                    autoPlay
                    playsInline
                    muted={true}
                />
            </VideoContainer>
            <VideoContainer>
                {
                    Object.values(remoteList).map((stream, index) => {
                        return (
                            <video
                                key={`video_${index}`}
                                ref={video => {
                                    if (video) {
                                        video.srcObject = stream;
                                    }
                                }}
                                autoPlay
                                playsInline
                                muted={true}
                            />
                        )
                    })
                }

            </VideoContainer>
        </Container>

    )
};


export default observer(Room);

