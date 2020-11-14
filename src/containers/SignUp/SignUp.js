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
import { useStores } from "@store";
import { TextField } from "@material-ui/core";
import Link from "next/link";
import { withTranslation } from '@i18n';

const SignUp = ({ t }) => {
    useEffect(() => {

    }, []);
    const { params, paramsUpdate, onSubmit } = useStores()['SignUpStore'];
    const { email, password, phone, birthday,firstName,lastName } = params;

    return (
        <>
            <SignBackground/>
            <SignUpForm onSubmit={e => {
                onSubmit(e)
            }}>
                <SignUpContainer>
                    <Link href="/">
                        <BackButton> {t('back')}</BackButton>
                    </Link>
                    <SignUpContent>
                        <div>
                            <span style={{ fontSize: "40px" }}>{t('signup_title')}</span>
                        </div>
                        <div>
                            <SignUpDescription>{t('sub_description_1')}</SignUpDescription>
                            <SignUpDescription
                                style={{ fontWeight: "normal" }}> {t('sub_description_2')}</SignUpDescription>
                        </div>
                        <InputContainer>
                            <InputDiv>
                                <Input fullWidth variant="outlined" label={t('email')} placeholder={t('email')} value={email}
                                       onChange={e => {
                                           paramsUpdate("email", e.target.value)
                                       }}/>
                            </InputDiv>
                            <InputDiv>
                                <Input placeholder={t('first_name')}
                                       label={t('first_name')}
                                       variant="outlined"
                                       style={{ marginRight: "2rem" }}
                                       value={firstName}
                                       onChange={e => {
                                           paramsUpdate("firstName", e.target.value)
                                       }}/>
                                <Input placeholder={t('last_name')}
                                       label={t('last_name')}
                                       value={lastName}
                                       variant="outlined"
                                       onChange={e => {
                                           paramsUpdate("lastName", e.target.value)
                                       }}/>
                            </InputDiv>

                            <InputDiv>
                                <Input
                                    variant="outlined"
                                    fullWidth
                                    label={t('password')}
                                    placeholder={t('password')}
                                    type="password"
                                    value={password}
                                    onChange={e => {
                                        paramsUpdate("password", e.target.value)
                                    }}/>
                            </InputDiv>
                            <InputDiv>
                                <TextField
                                    id="date"
                                    variant="outlined"
                                    label="Birthday"
                                    type="date"
                                    fullWidth
                                    value={birthday}
                                    onChange={e => {
                                        paramsUpdate("birthday", e.target.value)
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </InputDiv>
                            <PhoneInputContainer>
                                <PhoneInput
                                    defaultCountry="TW"
                                    placeholder={t('phone')}
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
export default withTranslation('signup')(observer(SignUp));
