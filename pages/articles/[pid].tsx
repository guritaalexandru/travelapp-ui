import Layout from '../../js/components/Layout';
import DynamicPage from '../../js/components/Templates/DynamicPage';
import { getArticleDataByPath, getAllArticlesPaths } from '../../js/utils/functions/pageDataFunctions';

import { DynamicPageProps } from '../../js/utils/types/DynamicData'
import { UrlParamsProps } from '../../js/utils/types/GlobalData'

export default function Article({ pageData }: DynamicPageProps) {
    const {
        title,
        sections,
        description
    } = pageData;

    return (
        <Layout title={title} description={description}>
            <DynamicPage sections={sections} />
        </Layout>
    )
}

export async function getStaticProps({ params }: UrlParamsProps) {
    const pageData = getArticleDataByPath(params.pid);
    return {
        props: {
            pageData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllArticlesPaths();
    return {
        paths,
        fallback: false,
    };
}
