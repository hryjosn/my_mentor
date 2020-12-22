/** 此處定義全部的 store */
import SignUpStore from 'src/containers/SignUp/store/SignUpStore.js'
import LayoutStore from './LayoutStore'
import LoginModalStore from 'src/containers/HomePage/components/LoginModal/store/LoginModalStore.js'
import IssueModalStore from 'src/containers/HomePage/components/IssueModal/store/IssueModalStore.js'
import IssueDetailModalStore from 'src/containers/HomePage/components/IssueDetailModal/store/IssueDetailModalStore.js'
import HomeStore from 'src/containers/HomePage/store/HomeStore.js'
import RoomStore from 'src/containers/Room/store/RoomStore.js'
import IssueStore from 'src/containers/Issue/store/IssueStore.js'
import { MobXProviderContext } from "mobx-react";
import React from "react";

function useStores() {
    return React.useContext(MobXProviderContext);
}

export {
    useStores,
    LayoutStore,
    IssueStore,
    SignUpStore,
    LoginModalStore,
    IssueModalStore,
    HomeStore,
    IssueDetailModalStore,
    RoomStore,
}
