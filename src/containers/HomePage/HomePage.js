import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Button, Page } from '@components';
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import IssueModal from "./components/IssueModal";
import { useStores } from "@store";
import { IssueContainer, IssueItem, IssueTitle } from "./HomePage.styles";

const HomePage = () => {
    const { IssueModalStore, HomeStore } = useStores()
    const { openModal } = IssueModalStore
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
                        I have a Issue
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
                                    openModal()
                                }}>
                                    Detail
                                </Button>
                            </div>

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
