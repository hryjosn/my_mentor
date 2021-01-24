import React from 'react';
import { HeaderContainer, SignUpSpan } from "./Header.styles";
import Link from "next/link";
import { useStores } from "@store";
import { observer } from 'mobx-react';
import i18next from '@i18n';
import Router from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

const { withTranslation } = i18next;

const Header = ({ t }) => {
    const { userInfo } = useStores()['LayoutStore']
    if (!userInfo) {
        Router.push("/")
    }

    return (
        <HeaderContainer>
            <IoIosArrowBack className={"cursor-pointer"} size={30} onClick={()=>{
                Router.push("/")
            }}/>
        </HeaderContainer>
    );
};

export default withTranslation('home')(observer(Header));
