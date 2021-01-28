import { action, computed, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callGetAvailableTimeList, callGetAvailableTimeListById } from "@api";
import { addDays, format, subDays } from 'date-fns';

const initState = {
    editMode: false,
    week: 0,
    timeList: {},
};
const api = {
    list: callGetAvailableTimeList,
    getListById: callGetAvailableTimeListById
}

class CalendarStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }


    @computed get period() {
        return {
            startDate: format(subDays(new Date(), new Date().getDay() + 7 * this.week), "yyyy-MM-dd"),
            endDate: format(addDays(new Date(), 6 - new Date().getDay() + 7 * this.week), "yyyy-MM-dd")
        }
    }

    @action onSubmit = async () => {
        const userId = localStorage.getItem("userId")
        if (userId) {
            const postData = this.userInfo;
            postData.birthday = new Date(postData.birthday).toISOString()
            await this.api.updateUserInfo(postData);
            await this.checkUserInfo();
            this.editMode = false;
        }
    }
    @action getList = async () => {
        try {
            const postData = { start: this.period.startDate, end: new Date(new Date(this.period.endDate).setHours(23, 59, 59)) }
            this.timeList = (await this.api.list(postData))["data"]
        } catch (e) {
            console.error("error:", e)
        }

    }
    @action getListById = async (_id) => {
        try {

            const postData = { _id, start: this.period.startDate, end: new Date(new Date(this.period.endDate).setHours(23, 59, 59)) }
            this.timeList = (await this.api.getListById(postData))["data"]
        } catch (e) {
            console.error("error:", e)
        }

    }
}

const store = new CalendarStore();
export default store;


