import React from 'react';
import { HeaderContainer,SignUpSpan } from "./Header.styles";
import Link from "next/link";
import Router from 'next/router';


const Header = () => {
    return (
        <HeaderContainer>
            <Link href="/signup">
                <SignUpSpan>
                    Signup
                </SignUpSpan>
            </Link>
            <span>
                Login
            </span>
        </HeaderContainer>
    );
};

export default Header;
