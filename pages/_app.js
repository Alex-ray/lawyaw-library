import React from 'react';
import { Provider } from 'mobx-react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { initializeStore } from '../models/index';

const isDevelopment = process.env.NODE_ENV === 'development';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        //
        // Use getInitialProps as a step in the lifecycle when
        // we can initialize our store
        //
        const isServer = typeof window === 'undefined';
        const store = initializeStore(isServer);
        //
        // Check whether the page being rendered by the App has a
        // static getInitialProps method and if so call it
        //
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {
            store: pageProps.store,
            isServer,
            pageProps
        };
    }

    constructor(props) {
        const isServer = typeof window === 'undefined';
        super(props);
        this.store = initializeStore(isServer, props.store);

        // Poor mans development tool, do not include in production.
        if (!isServer && isDevelopment) {
            window.store = this.store;
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Books</title>
                    <meta name="application-name" content="Books" />
                </Head>
                <Provider store={this.store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}