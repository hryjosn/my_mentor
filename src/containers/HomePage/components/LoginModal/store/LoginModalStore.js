import { action, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callLoginUser } from "@api";
import * as AllStore from "@store/store";
import { LayoutStore } from "@store";

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
        await this.login(this.params)
        this.reset();
    }
    async login(postData) {
        try {
            const res = await callLoginUser(postData);
            if (res.status === 200) {
                localStorage.setItem("userId", res.data.id)
                localStorage.setItem("token", res.data.token)
                await LayoutStore.checkUserInfo()
            }
        } catch (e) {
            alert(e.response.data.msg)
        }
    }

    @action logout = async () => {
        Object.keys(AllStore).forEach(storeKey => {
            if (storeKey !== 'useStores') {
                AllStore[storeKey].reset();
            }
        });
        const localStorageKeys = Object.keys(localStorage);
        if (localStorageKeys.length > 0) {
            localStorage.clear();
        }
    }


}

const store = new LoginModalStore();
export default store;


