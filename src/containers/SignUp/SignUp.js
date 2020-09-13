import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import {
    SignBackground,
    SignUpContainer,
    SignUpContent,
    InputContainer,
    InputDiv,
    PhoneInputContainer,
    SignUpForm,
    SignUpDescription,
    BackButton
} from './SignUp.styles'
import { Input, Button } from '@components'
import PhoneInput from 'react-phone-number-input';
import styled from "@emotion/styled";
import { useStores } from "@store";
import Link from "next/link";

const SignUp = () => {
    useEffect(() => {

    }, []);
    const { params, paramsUpdate, onSubmit } = useStores()['SignUpStore']
    const { email, password, phone } = params
    return (
        <>
            <SignBackground>
            </SignBackground>
            <SignUpForm onSubmit={e => {
                onSubmit(e)
            }}>
                <SignUpContainer>
                    <Link href="/">
                        <BackButton> {`< My Mentor`}</BackButton>
                    </Link>
                    <SignUpContent>
                        <div>
                            <span style={{ fontSize: "40px" }}>Sign Up</span>
                        </div>
                        <div>
                            <SignUpDescription> This is something you would never read</SignUpDescription>
                            <SignUpDescription style={{ fontWeight: "normal" }}> But if it exist would make page looks
                                professional</SignUpDescription>
                        </div>
                        <InputContainer>
                            <InputDiv>
                                <Input fullWidth placeholder={"Email"} value={email} onChange={e => {
                                    paramsUpdate("email", e.target.value)
                                }}/>
                            </InputDiv>

                            <InputDiv>
                                <Input
                                    fullWidth
                                    placeholder={"Password"}
                                    type="password"
                                    value={password}
                                    onChange={e => {
                                        paramsUpdate("password", e.target.value)
                                    }}/>
                            </InputDiv>
                            <PhoneInputContainer>
                                <PhoneInput
                                    defaultCountry="TW"
                                    placeholder={"Phone"}
                                    value={phone}
                                    onChange={value => {
                                        paramsUpdate('phone', value);
                                    }}
                                />
                            </PhoneInputContainer>
                        </InputContainer>
                        <Button onClick={(e) => {
                            onSubmit(e)
                        }}>Sign Up</Button>
                    </SignUpContent>
                </SignUpContainer>
            </SignUpForm>

        </>

    );
};

export default observer(SignUp);
const MySpan = styled.span`
font-size: 72px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`
