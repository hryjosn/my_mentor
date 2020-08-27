/** 此處定義全部的 store */
import testStore from './testStore.js'
import storeAction from './storeAction.js'
import SignUpStore from 'src/containers/SignUp/store/SignUpStore.js'
import { MobXProviderContext } from "mobx-react";
import React from "react";

function useStores() {
    return React.useContext(MobXProviderContext);
}
export {
    testStore,
    useStores,
    storeAction,
    SignUpStore
}
export async function fetchInitialStoreState() {
    // You can do anything to fetch initial store state
    return {

    };
}
