/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import { callGetIssueById } from '@api';
import storeAction from '@storeAction';

const initState = {
    title: "",
    description: "",
    author:{}
};
const api = {
    getDetail: callGetIssueById
}

class IssueStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action init = async (id) => {
        const res = await this.api.getDetail({ _id: id })
        if (res.status === 200) {
            this.assignData({ ...res?.data?.data })
        }

    }
    @action getList = async () => {
        const { page, limit } = this;
        const res = await this.api.list({ page, limit });
        const { list, total } = res.data;
        this.assignData({ list:[...list], total })
    }


}

const store = new IssueStore();
export default store;


