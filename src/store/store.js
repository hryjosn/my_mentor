/** 此處定義全部的 store */
import SignUpStore from 'src/containers/SignUp/store/SignUpStore'
import LayoutStore from './LayoutStore'
import LoginModalStore from 'src/containers/HomePage/components/LoginModal/store/LoginModalStore'
import IssueModalStore from 'src/containers/HomePage/components/IssueModal/store/IssueModalStore'
import IssueDetailModalStore from 'src/containers/HomePage/components/IssueDetailModal/store/IssueDetailModalStore'
import HomeStore from 'src/containers/HomePage/store/HomeStore'
import RoomStore from 'src/containers/Room/store/RoomStore'
import IssueStore from 'src/containers/Issue/store/IssueStore'
import MyAccountStore from 'src/containers/MyAccount/store/MyAccountStore'
import EditTimeModalStore from 'src/containers/MyAccount/components/EditTimeModal/store/EditTimeModalStore'
import CalendarStore from '@components/Calendar/store/CalendarStore'
import ScheduleModalStore from '@containers/Issue/components/store/ScheduleModalStore'
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
    MyAccountStore,
    ScheduleModalStore,
    CalendarStore,
    EditTimeModalStore
}
