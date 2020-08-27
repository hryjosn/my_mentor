import React from 'react';
import { HeaderContainer,SignUpSpan } from "./Header.styles";
import Link from "next/link";
import Router from 'next/router';


const Login = () => {
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

export default Login;
