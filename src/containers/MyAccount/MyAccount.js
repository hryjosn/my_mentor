import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Button, Page } from '@components';
import Header from "./components/Header";
import { useStores } from "@store";
import { withTranslation } from '@i18n';
import styled from "@emotion/styled";
import { HiOutlineChevronRight } from 'react-icons/hi';



const MyAccount = ({ t }) => {
    const { MyAccountStore } = useStores();
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
                            <div> Johnson</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 年齡</div>
                            <div> 25</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 公司名稱</div>
                            <div> Tico Inc.</div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 職稱 </div>
                            <div> 前端工程師 </div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 過往經歷 </div>
                            <div> 前端工程師 </div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                        <InfoLabel>
                            <div> 其他描述 </div>
                            <div> 3年前端工程師 </div>
                            <IconContainer>
                                <HiOutlineChevronRight fontSize={20}/>
                            </IconContainer>
                        </InfoLabel>
                    </Container>
                </div>
            </FormContainer>
        </Page>


    );
};
MyAccount.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(observer(MyAccount));
const Container = styled.div`
  padding: 24px 24px 8px 24px;
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
const InfoLabel =styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; 
  padding: 16px 10px;
  border-bottom: 1px solid #dadce0;
`
const IconContainer =styled.div`
  text-align: right;
`
