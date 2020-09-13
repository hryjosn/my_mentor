import React from 'react'
import { Provider } from 'mobx-react'
import * as stores from '../src/store'
import 'mobx-react/batchingForReactDom';
import 'react-phone-number-input/style.css'
import Head from 'next/head';
require('dotenv').config();
import 'draft-js/dist/Draft.css';


export default function MyApp(props) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title> My Mentor</title>
                <meta property="og:title" content=" My Mentor" key="title" />

            </Head>
            <Provider {...stores}>
                <style global jsx>{`              
                  html,
                  body,
                  body > div:first-child{
                    margin: 0;
                    height: 100%;
                    font-family:  sans-serif;
                  }
                `}</style>
                <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:700' rel='stylesheet'
                      type='text/css'/>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <Component {...pageProps} />
            </Provider>

        </>
    );
}

