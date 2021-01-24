import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useStores } from "@store";
import { withTranslation } from '@i18n';
import { Column } from '@styles';
import { differenceInYears, format } from 'date-fns'
import {
    InfoLabel,
    NameInfoLabel
} from '../MyAccount.styles'


const NormalMode = (props) => {
    const { t } = props;
    const { MyAccountStore } = useStores();
    const { userInfo } = MyAccountStore;
    const { birthday, company, description, email, experience, firstName, jobTitle, lastName } = userInfo||{};
    useEffect(() => {
    }, []);
    return (
        <div>
            <div className={"d-flex"}>
                <Column>
                    <NameInfoLabel>
                        <div className={"label"}> 姓氏</div>
                        <div>{lastName}</div>
                    </NameInfoLabel>
                </Column>
                <Column>
                    <NameInfoLabel>
                        <div className={"label"}> 名字</div>
                        <div>{firstName}</div>
                    </NameInfoLabel>
                </Column>
            </div>
            <InfoLabel>
                <div className={"label"}> 生日</div>
                {birthday && <div>{format(
                    new Date(birthday),
                    'yyyy/MM/dd'
                )}</div>}
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

