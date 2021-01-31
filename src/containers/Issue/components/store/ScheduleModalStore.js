import { action, extendObservable, configure } from 'mobx';
import { callGetAllIssues } from '@api';
import storeAction from '@storeAction';
const initState = {
    visible:false
};
const api = {
}

class ScheduleModalStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }


}

const store = new ScheduleModalStore();
export default store;


