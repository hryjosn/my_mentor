import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Input, Button } from '@components';
import { useStores } from "@store";
import { withTranslation } from '@i18n';
import { Column } from '@styles';
import { differenceInYears } from 'date-fns'
import DateFnsUtils from '@date-io/date-fns';

import Calendar from "@containers/MyAccount/components/Calendar";
import {
    Container,
    AccountTitle,
    AccountSubtitle,
    InfoLabel,
    NameInfoLabel
} from '../MyAccount.styles'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


const NormalMode = (props) => {
    const { t } = props;
    const { MyAccountStore } = useStores();
    const { userInfo } = MyAccountStore;
    const { birthday, company, description, email, experience, firstName, jobTitle, lastName } = userInfo;
    useEffect(() => {
    }, []);
    return (
        <div>
            <div className={"d-flex"}>
                <Column>
                    <NameInfoLabel>
                        <div className={"label"}> 姓氏</div>
                        <div>{firstName}</div>
                    </NameInfoLabel>
                </Column>
                <Column>
                    <NameInfoLabel>
                        <div className={"label"}> 名字</div>
                        <div>{lastName}</div>
                    </NameInfoLabel>
                </Column>
            </div>
            <InfoLabel>
                <div className={"label"}> 生日</div>
                <div>{birthday}</div>
            </InfoLabel><InfoLabel>
            <div className={"label"}> 年齡</div>
            <div> {differenceInYears(
                new Date(),
                new Date(birthday)
            )}</div>
        </InfoLabel>
            <InfoLabel>
                <div className={"label"}> 連絡信箱</div>
                <div>{email}</div>
            </InfoLabel>
            <InfoLabel>
                <div className={"label"}> 公司名稱</div>
                <div>{company}</div>
            </InfoLabel>
            <InfoLabel>
                <div className={"label"}> 職稱</div>
                <div>{jobTitle}</div>

            </InfoLabel>
            <InfoLabel>
                <div className={"label"}> 過往經歷</div>
                <div>{experience}</div>
            </InfoLabel>
            <InfoLabel>
                <div className={"label"}> 其他描述</div>
                <div>{description}</div>
            </InfoLabel>

        </div>



    );
};

export default withTranslation('home')(observer(NormalMode));

