import { action, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callSignUpUser } from '@api';
import { parsePhoneNumber } from 'react-phone-number-input'
import Router from 'next/router';
import { format, subYears } from "date-fns";
import { LoginModalStore, LayoutStore } from "@store";

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
        const regionNumber = parsePhoneNumber(this.params.phone)?.countryCallingCode;
        const phone = parsePhoneNumber(this.params.phone)?.nationalNumber;
        const postData = { ...this.params, regionNumber, phone };
        postData.name = this.params.firstName + this.params.lastName;

        try {
            const res = await callSignUpUser(postData)

            if (res.status === 200) {
                const { email, password } = this.params
                await LoginModalStore.login({ email, password })
                await Router.push("/")
            }
        } catch (e) {
            if (e?.response?.status === 301) {
                alert("The email or phone was registered")
            }
        }


    }


}

const store = new SignUpStore();
export default store;


