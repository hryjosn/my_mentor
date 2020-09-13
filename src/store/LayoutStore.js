/** 用於記錄各種scroll resize 或 螢幕寬度等狀態 */
import { action, extendObservable } from 'mobx';
import storeAction from './storeAction';

const initState = {
    snackBarContent: '',
    snackBarVisible: false
};

class LayoutStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action show = (snackBarContent) => {
        this.assignData({ snackBarContent, snackBarVisible: true })
    }
    @action handleClose = () => {
        this.assignData({ snackBarVisible: false })
    }


}

const store = new LayoutStore();
export default store;


