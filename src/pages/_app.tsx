import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "../store/store";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>Todo List</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}
