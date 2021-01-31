import { action, extendObservable, configure } from 'mobx';
import { callGetAllIssues } from '@api';
import storeAction from '@storeAction';
configure({
    enforceActions: "never",
})
const initState = {
    list: [],
    page: 1,
    limit: 8,
    total: 0,
};
const api = {
    list: callGetAllIssues
}

class HomeStore extends storeAction {
    constructor() {
        super();
        this.api = api;
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action getList = async () => {
        const { page, limit } = this;
        const res = await this.api.list({ page, limit });
        const { list, total } = res.data;
        this.assignData({ list, total })
    }


}

const store = new HomeStore();
export default store;


