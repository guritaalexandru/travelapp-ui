import Head from 'next/head'
import Header from './Sections/Header';
import Footer from './Sections/Footer';

type Props = {
    title: string;
    description: string;
    noLayout?: boolean;
    children: React.ReactNode;
}

function Layout({ title, description, noLayout, children }: Props) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {!noLayout && <Header />}

            <main>
                {children}
            </main>

            {!noLayout && <Footer />}

        </div>
    );
}

export default Layout;