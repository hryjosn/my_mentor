/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import storeAction from '@storeAction';
import { callUpdateAvailableTime } from '@api';
import { format } from "date-fns";
import CalendarStore from "@components/Calendar/store/CalendarStore"

const initState = {
    visible: false,
    params: {
        date: new Date(),
    }
};

const api = {
    update: callUpdateAvailableTime,
}

class ScheduleModalStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action onSubmit = async (e, timeList) => {
        e.preventDefault();
        const formattedTimeList = timeList.filter(item => item.selected).map(item => item.value);
        const postData = { timeList: formattedTimeList, date: format(this.params.date, "yyyy-MM-dd") }
        await this.api.update(postData);
        this.visible = false;
        CalendarStore.getList()
    }


}

const store = new ScheduleModalStore();
export default store;


