import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Page, Input } from '@components';
import Header from "./components/Header";
import { useStores } from "@store";
import { withTranslation } from '@i18n';
import { Column } from '@styles';
import { differenceInYears } from 'date-fns'
import Calendar from "@containers/MyAccount/components/Calendar";
import {
    FormContainer,
    Container,
    AccountTitle,
    AccountSubtitle,
    InfoLabel,
    CalendarContainer,
    NameInfoLabel
} from './MyAccount.styles'
import { TextField } from "@material-ui/core";


const MyAccount = (props) => {
    const { t } = props;
    const { LayoutStore } = useStores();
    const { userInfo, userInfoUpdate } = LayoutStore
    const { birthday, company, description, email, experience, firstName, jobTitle, lastName } = userInfo;
    useEffect(() => {
    }, []);
    return (
        <Page>
            <Header/>
            <FormContainer>
                <div>
                    <Container>
                        <AccountTitle>個人資料</AccountTitle>
                        <AccountSubtitle>其他 MyMentor 服務使用者可能會看到部分資訊。</AccountSubtitle>
                        <div className={"d-flex"}>
                            <Column>
                                <NameInfoLabel>
                                    <div className={"label"}> 姓氏</div>
                                    <Input variant="outlined" placeholder={"firstName"} value={firstName} onChange={e => {
                                        userInfoUpdate("firstName", e.target.value)
                                    }}/>
                                </NameInfoLabel>
                            </Column>
                            <Column>
                                <NameInfoLabel>
                                    <div className={"label"}> 名字</div>
                                    <Input variant="outlined" placeholder={"lastName"} value={lastName} onChange={e => {
                                        userInfoUpdate("lastName", e.target.value)
                                    }}/>
                                </NameInfoLabel>
                            </Column>
                        </div>
                        <InfoLabel>
                            <div className={"label"}> 生日</div>
                            <TextField
                                id="date"
                                variant="outlined"
                                label="Birthday"
                                type="date"
                                fullWidth
                                value={birthday}
                                onChange={e => {
                                    userInfoUpdate("birthday", e.target.value)
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </InfoLabel><InfoLabel>
                            <div className={"label"}> 年齡</div>
                            <div> {differenceInYears(
                                new Date(),
                                new Date(birthday)
                            )}</div>
                        </InfoLabel>
                        <InfoLabel>
                            <div className={"label"}> 連絡信箱</div>
                            <Input variant="outlined" placeholder={"Email"} value={email} onChange={e => {
                                userInfoUpdate("email", e.target.value)
                            }}/>
                        </InfoLabel>
                        <InfoLabel>
                            <div className={"label"}> 公司名稱</div>
                            <Input variant="outlined" placeholder={"公司名稱"} value={company} onChange={e => {
                                userInfoUpdate("company", e.target.value)
                            }}/>
                        </InfoLabel>
                        <InfoLabel>
                            <div className={"label"}> 職稱</div>
                            <Input variant="outlined" placeholder={"職稱"} value={jobTitle} onChange={e => {
                                userInfoUpdate("jobTitle", e.target.value)
                            }}/>
                        </InfoLabel>
                        <InfoLabel>
                            <div className={"label"}> 過往經歷</div>
                            <Input variant="outlined" placeholder={"過往經歷"} value={experience} onChange={e => {
                                userInfoUpdate("experience", e.target.value)
                            }}/>
                        </InfoLabel>
                        <InfoLabel>
                            <div className={"label"}> 其他描述</div>
                            <Input variant="outlined" placeholder={"其他描述"} value={description} onChange={e => {
                                userInfoUpdate("description", e.target.value)
                            }}/>
                        </InfoLabel>
                        <Calendar/>

                    </Container>
                </div>
            </FormContainer>
            <CalendarContainer>
                {/*<Calendar/>*/}
            </CalendarContainer>
        </Page>


    );
};

export default withTranslation('home')(observer(MyAccount));

