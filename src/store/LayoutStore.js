/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import storeAction from './storeAction';
import { callGetUserInfo } from '@api';

const initState = {
    snackBarContent: '',
    snackBarVisible: false,
    userId: '',
    token: '',
    userInfo: {}
};
const api = {
    userInfo: callGetUserInfo
}

class LayoutStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action checkUserInfo = async () => {
        const userId = localStorage.getItem("userId")
        const token = localStorage.getItem("token")
        if (userId) {
            const res = await this.api.userInfo();
            const { userInfo } = res;
            this.assignData({ userInfo })
        }
        this.assignData({ userId, token })
    }
    @action show = (snackBarContent) => {
        this.assignData({ snackBarContent, snackBarVisible: true })
    }
    @action handleClose = () => {
        this.assignData({ snackBarVisible: false })
    }


}

const store = new LayoutStore();
export default store;


