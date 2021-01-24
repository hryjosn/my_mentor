import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Input } from '@components';
import { useStores } from "@store";
import { withTranslation } from '@i18n';
import { Column } from '@styles';
import { differenceInYears } from 'date-fns'
import DateFnsUtils from '@date-io/date-fns';

import {
    InfoLabel,
    NameInfoLabel
} from '../MyAccount.styles'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


const EditMode = (props) => {
    const { t } = props;
    const { MyAccountStore } = useStores();
    const { userInfo, userInfoUpdate } = MyAccountStore
    const { birthday, company, description, email, experience, firstName, jobTitle, lastName } = userInfo||{};
    useEffect(() => {
    }, []);
    return (

        <div>
            <div className={"d-flex"}>
                <Column>
                    <NameInfoLabel>
                        <div className={"label"}> 姓氏</div>
                        <Input variant="outlined" placeholder={"lastName"} value={lastName} onChange={e => {
                            userInfoUpdate("lastName", e.target.value)
                        }}/>
                    </NameInfoLabel>
                </Column>
                <Column>
                    <NameInfoLabel>
                        <div className={"label"}> 名字</div>
                        <Input variant="outlined" placeholder={"firstName"} value={firstName} onChange={e => {
                            userInfoUpdate("firstName", e.target.value)
                        }}/>
                    </NameInfoLabel>
                </Column>
            </div>
            <InfoLabel>
                <div className={"label"}> 生日</div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        // style={{ width: '95px' }}
                        inputVariant="outlined"
                        autoOk
                        ampm={false}
                        value={new Date(birthday)}
                        onChange={date => {
                            userInfoUpdate("birthday", date)
                        }}
                        format="yyyy/MM/dd"
                    />
                </MuiPickersUtilsProvider>
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
        </div>


    );
};

export default withTranslation('home')(observer(EditMode));

