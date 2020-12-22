/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callGetUserInfo,callUpdateUserInfo } from "@api";

const initState = {
    editMode: false,
    userInfo: {
        birthday: "",
        company: "",
        description: "",
        email: "",
        experience: "",
        firstName: "",
        lastName: "",
        jobTitle: "",
    }
};
const api = {
    userInfo: callGetUserInfo,
    updateUserInfo: callUpdateUserInfo,
}

class MyAccountStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action userInfoUpdate = async (dataKey, value) => {
        const userInfo = { ...this.userInfo, [dataKey]: value }
        this.assignData({ userInfo })
    }
    /** action - params 多項改變 */
    @action userInfoAssign = (obj) => {
        console.log("obj",obj)
        const userInfo = { ...this.userInfo, ...obj }
        this.assignData({ userInfo })
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
    @action onSubmit = async () => {
        const userId = localStorage.getItem("userId")
        if (userId) {
            await this.api.updateUserInfo(this.userInfo);
            await this.checkUserInfo();
            this.editMode=false;
        }
    }
}
const store = new MyAccountStore();
export default store;


