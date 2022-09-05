import Layout from '../../js/components/Layout';
import DynamicPage from '../../js/components/Templates/DynamicPage';
import { getAllPlacesPaths, getPlaceDataByPath } from '../../js/utils/functions/pageDataFunctions';

import { DynamicPageProps } from '../../js/utils/types/DynamicData'
import { UrlParamsProps } from '../../js/utils/types/GlobalData'

export default function Places({ pageData }: DynamicPageProps) {
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
    const pageData = await getPlaceDataByPath(params.pid);

    return {
        props: {
            pageData,
        },
    };
}

export async function getStaticPaths() {
    const paths = await getAllPlacesPaths();
    return {
        paths,
        fallback: false,
    };
}
