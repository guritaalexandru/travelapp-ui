import Layout from '../../js/components/Layout';
import DynamicPage from '../../js/components/Templates/DynamicPage';
import { getAllPlacesIds, getPlaceDataById } from '../../js/utils/functions/pageDataFunctions';
import { DynamicPageData } from '../../js/utils/types/GlobalData'
interface Props {
    pageData: DynamicPageData
}

export default function Places({ pageData }: Props) {
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
    const pageData = getPlaceDataById(params.pid);
    return {
        props: {
            pageData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPlacesIds();
    return {
        paths,
        fallback: false,
    };
}
