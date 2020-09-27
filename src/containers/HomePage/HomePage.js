import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Button, Page } from '@components';
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import IssueModal from "./components/IssueModal";
import IssueDetailModal from "./components/IssueDetailModal";
import { useStores } from "@store";
import { IssueContainer, IssueItem, IssueTitle } from "./HomePage.styles";
import { withTranslation } from '@i18n';


const HomePage = ({t}) => {
    const { IssueModalStore, HomeStore,IssueDetailModalStore } = useStores()
    const { openModal } = IssueModalStore
    const { assignData } = IssueDetailModalStore
    const { getList, list } = HomeStore;
    useEffect(() => {
        getList()
    }, []);
    return (
        <Page>
            <div style={{ height: "15%" }}>
                <Header/>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <Button onClick={() => {
                        openModal()
                    }}>
                        {t('ask_a_question')}
                    </Button>
                </div>
            </div>

            <IssueContainer>
                {list?.map((item, index) => {
                    const { description, shortDescription, title } = item
                    return (
                        <IssueItem key={`issue-box-${index}`}>
                            <IssueTitle>{title}</IssueTitle>
                            <div style={{ height: "50%" }}>{shortDescription || description}</div>
                            <div style={{ textAlign: "center" }}>
                                <Button onClick={() => {
                                    assignData({...item})
                                    IssueDetailModalStore.openModal()
                                }}>
                                    {t('detail')}

                                </Button>
                            </div>

                        </IssueItem>
                    )
                })}

            </IssueContainer>
            <LoginModal/>
            <IssueModal/>
            <IssueDetailModal/>
        </Page>


    );
};
HomePage.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(observer(HomePage));
