import Layout from '../../js/components/Layout';
import DynamicPage from '../../js/components/Templates/DynamicPage';
import { getArticleDataById, getAllArticlesIds } from '../../js/utils/functions/pageDataFunctions';
import { DynamicPageData } from '../../js/utils/types/DynamicData'

interface Props {
    pageData: DynamicPageData
}

export default function Article({ pageData }: Props) {
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

export async function getStaticProps({ params }) {
    const pageData = getArticleDataById(params.pid);
    return {
        props: {
            pageData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllArticlesIds();
    return {
        paths,
        fallback: false,
    };
}
