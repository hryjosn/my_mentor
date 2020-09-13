/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callSignUpUser } from '@api';
import { parsePhoneNumber } from 'react-phone-number-input'
import Router from 'next/router';
import { callLoginUser } from "@/api/api";

const initState = {
    visible: false,
    params: {
        email: "",
        password: "",
    }
};

class LoginModalStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action onSubmit = async (e) => {
        e.preventDefault();
        const postData = this.params;
        const res = await callLoginUser(postData);
        console.log(res.status)
        if (res.status === 200) {
            localStorage.setItem("userId",res.data.id)
            localStorage.setItem("token",res.data.token)
            this.reset();
        }
    }


}

const store = new LoginModalStore();
export default store;


