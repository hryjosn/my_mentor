/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import { callGetAllIssues } from '@api';
import storeAction from '@storeAction';

const initState = {
    list: [],
    page: 1,
    limit: 8
};
const api = {
    list: callGetAllIssues
}

class MyAccountStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action getList = async () => {
        const { page, limit } = this;
        const { list } = await this.api.list({ page, limit });
        this.assignData({ list })
    }


}

const store = new MyAccountStore();
export default store;


