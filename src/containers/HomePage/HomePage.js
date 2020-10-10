import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Button, Page } from '@components';
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import IssueModal from "./components/IssueModal";
import IssueDetailModal from "./components/IssueDetailModal";
import { useStores } from "@store";
import { IssueContainer, IssueItem, IssueTitle, IssueDescription } from "./HomePage.styles";
import { withTranslation } from '@i18n';
import Link from "next/link";


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
                    const { description, shortDescription, title,_id } = item;
                    return (
                        <IssueItem key={`issue-box-${index}`}>
                            <IssueTitle>{title}</IssueTitle>
                            <IssueDescription>{shortDescription || description}</IssueDescription>
                            <div style={{ textAlign: "center" }}>
                                <Link  href="/issue/[[issueId]]" as={`/issue/${_id}`}>
                                    <Button>
                                        {t('detail')}
                                    </Button>
                                </Link>

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
