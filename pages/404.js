import Layout from '../js/components/Layout';
import { TITLE_404 } from '../js/utils/constants/titlesConstants.ts';

function Custom404() {
    return ( 
        <Layout title={ TITLE_404 }>
            <h1>404 not found</h1>
        </Layout>
    );
}

export default Custom404;