import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Button, Page } from '@components';
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import IssueModal from "./components/IssueModal";
import { useStores } from "@store";
import { IssueContainer, IssueItem,IssueTitle,OuterLayer } from "./HomePage.styles";

const HomePage = () => {
    const { IssueModalStore, HomeStore } = useStores()
    const { openModal } = IssueModalStore
    const { getList, list } = HomeStore;
    useEffect(() => {
        getList()
    }, []);
    return (
        <Page>
            <Header/>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Button onClick={() => {
                    openModal()
                }}>
                    I have a Issue
                </Button>
            </div>
            <IssueContainer>
                {list?.map(item => {
                    return (
                        <IssueItem>
                            <IssueTitle>{item.title}</IssueTitle>
                            <div>{item.description}</div>
                        </IssueItem>
                    )
                })}
            </IssueContainer>
            <LoginModal/>
            <IssueModal/>
        </Page>


    );
};

export default observer(HomePage);
