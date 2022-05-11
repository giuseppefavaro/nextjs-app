import Head from 'next/head'
import ProductList from "../../components/ProductList";

import Header from "../../components/Header";
import Footer from '../../components/Footer';

const Prodotti = () => {
    return (
        <>
            <Head>
                <title>Prodotti</title>
                <meta name="description" content="Prodotti" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <ProductList />

            <Footer />
        </>
    )
}

export default Prodotti;