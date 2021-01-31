import { action, computed, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callGetAvailableTimeList, callGetUserInfo, callUpdateUserInfo } from "@api";
import { addDays, format, subDays } from 'date-fns';

const initState = {
    editMode: false,
    week: 0,
    timeList: { },
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
    list: callGetAvailableTimeList

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
        const postData = { start: this.period.startDate, end: new Date(new Date(this.period.endDate).setHours(23,59,59)) }
        this.timeList = (await this.api.list(postData))["data"]
    }
}

const store = new MyAccountStore();
export default store;


