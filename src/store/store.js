/** 此處定義全部的 store */
import testStore from './testStore.js'
import storeAction from './storeAction.js'
import SignUpStore from 'src/containers/SignUp/store/SignUpStore.js'
import LayoutStore from './LayoutStore'
import LoginModalStore from 'src/containers/HomePage/components/LoginModal/store/LoginModalStore.js'
import IssueModalStore from 'src/containers/HomePage/components/IssueModal/store/IssueModalStore.js'
import HomeStore from 'src/containers/HomePage/store/HomeStore.js'
import { MobXProviderContext } from "mobx-react";
import React from "react";

function useStores() {
    return React.useContext(MobXProviderContext);
}
export {
    testStore,
    useStores,
    storeAction,
    LayoutStore,
    SignUpStore,
    LoginModalStore,
    IssueModalStore,
    HomeStore
}
export async function fetchInitialStoreState() {
    // You can do anything to fetch initial store state
    return {

    };
}
