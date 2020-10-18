import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import {  Page } from '@components';
import Header from "./components/Header";
import { useStores } from "@store";
import { withTranslation } from '@i18n';
import styled from "@emotion/styled";
import { HiOutlineChevronRight } from 'react-icons/hi';
import { differenceInYears } from 'date-fns'
import Calendar from "@containers/MyAccount/components/Calendar";


const MyAccount = (props) => {
    const {t}=props;
    const { LayoutStore } = useStores();
    const { userInfo } = LayoutStore
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
                        <InfoLabel>
                            <div> 名稱</div>
                            <div> {`${firstName} ${lastName}`}</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 年齡</div>
                            <div> {differenceInYears(
                                new Date(),
                                new Date(birthday)
                            )}</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 連絡信箱</div>
                            <div> {email}</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 公司名稱</div>
                            <div> {company}</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 職稱</div>
                            <div> {jobTitle}</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 過往經歷</div>
                            <div> {experience}</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 其他描述</div>
                            <div> {description}</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                    </Container>
                </div>
            </FormContainer>
            <CalendarContainer>
                <Calendar/>

            </CalendarContainer>
        </Page>


    );
};

export default withTranslation('home')(observer(MyAccount));
const Container = styled.div`
  padding: 24px 24px 8px 24px;
`
const CalendarContainer = styled.div`
  margin: 0 8rem;
`
const AccountTitle = styled.div`
  font-size: 1.375rem;
`
const AccountSubtitle = styled.div`
  color: #5f6368;
  font-size: .875rem;
`
const FormContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #dadce0;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 6rem;
`
const InfoLabel = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; 
  padding: 16px 10px;
  border-bottom: 1px solid #dadce0;
`
const IconContainer = styled.div`
  text-align: right;
`
