import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Button } from '@components';
import Header from "./components/Header";

const DefaultPage = () => {
    useEffect(() => {

    }, []);
    return (
        <div>
            <Header/>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button>
                    I have a Question
                </Button>
            </div>
        </div>


    );
};

export default observer(DefaultPage);
