import App from 'next/app'
import React from 'react'
import { fetchInitialStoreState } from '../src/store'
import { Provider } from 'mobx-react'
import * as stores from '../src/store'
import 'mobx-react/batchingForReactDom';
import 'react-phone-number-input/style.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
require('dotenv').config();

class MyMobxApp extends App {

    // Fetching serialized(JSON) store state
    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext)
        const initialStoreState = await fetchInitialStoreState()

        return {
            ...appProps,
            initialStoreState,
        }
    }

    // Hydrate serialized state to store
    // static getDerivedStateFromProps(props, state) {
    //   state.store.hydrate(props.initialStoreState)
    //   // return state
    // }

    render() {
        const { Component, pageProps } = this.props
        return (

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
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default MyMobxApp
