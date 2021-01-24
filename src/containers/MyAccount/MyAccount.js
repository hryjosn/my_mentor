import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Page, Button } from '@components';
import Header from "./components/Header";
import EditMode from "./components/EditMode";
import NormalMode from "./components/NormalMode";
import { withTranslation } from '@i18n';
import {
    FormContainer,
    Container,
    AccountTitle, AccountSubtitle,
} from './MyAccount.styles'
import Calendar from "./components/Calendar";
import { MdModeEdit } from "react-icons/md/index";
import { useStores } from "@store";
import ScheduleModal from "./components/ScheduleModal";
import Router from 'next/router';

const MyAccount = (props) => {
    const { t } = props;
    const { MyAccountStore } = useStores();
    const { editMode, onSubmit, checkUserInfo, updateData, getList } = MyAccountStore;

    useEffect(() => {
        checkUserInfo();
        getList()
        const userId = localStorage.getItem("userId")
        if (!userId) {
            Router.push("/")
        }
    }, [])
    return (
        <Page>
            <Header/>
            <FormContainer>
                <Container>
                    <div className={"d-flex"}>
                        <div>
                            <AccountTitle>個人資料</AccountTitle>
                            <AccountSubtitle>其他 MyMentor 服務使用者可能會看到部分資訊。</AccountSubtitle>
                        </div>
                        <span style={{ marginLeft: "auto" }}>
                            {
                                editMode ?
                                    <Button onClick={() => {
                                        onSubmit()
                                    }}>{t('save')}</Button> :
                                    <MdModeEdit size={20} onClick={() => {
                                        updateData("editMode", !editMode)
                                    }}/>
                            }
                        </span>

                    </div>
                    {
                        editMode ? <EditMode/> : <NormalMode/>
                    }
                    <Calendar/>
                </Container>
            </FormContainer>
            <ScheduleModal/>
        </Page>
    );
};

export default withTranslation('home')(observer(MyAccount));

