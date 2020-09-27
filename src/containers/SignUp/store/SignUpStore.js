/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callSignUpUser } from '@api';
import { parsePhoneNumber } from 'react-phone-number-input'
import Router from 'next/router';
import { format, subYears } from "date-fns";

const initState = {

    params: {
        email: "",
        name: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        birthday: format(subYears(new Date(), 18), "yyyy-MM-dd")
    }
};

class SignUpStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action onSubmit = async (e) => {
        e.preventDefault();
        const regionNumber = parsePhoneNumber(this.params.phone).countryCallingCode;
        const phone = parsePhoneNumber(this.params.phone).nationalNumber;
        const postData = { ...this.params, regionNumber, phone };
        postData.name = this.firstName + this.lastName;
        const res = await callSignUpUser(postData)
        if (res.status === 200) {
            alert("Sign up successfully")
            Router.push("/")
        }

    }


}

const store = new SignUpStore();
export default store;


