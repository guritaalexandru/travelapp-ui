import Head from 'next/head'
import Header from './Sections/Header';
import Footer from './Sections/Footer';

type Props = {
    title: string;
    description: string;
    children: React.ReactNode;
}

function Layout({ title, description, children }: Props) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                {children}
            </main>

            <Footer />

        </div>
    );
}

export default Layout;