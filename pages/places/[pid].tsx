import Layout from '../../js/components/Layout';
import DynamicPage from '../../js/components/Templates/DynamicPage';
import { getAllPlacesIds, getPlaceDataById } from '../../js/utils/functions/pageDataFunctions';
import { DynamicPageData } from '../../js/utils/types/GlobalData'
interface Props {
    placeData: DynamicPageData
}

export default function Locations({ placeData }: Props) {
    const {
        title,
        sections
    } = placeData;
    return (
        <Layout title={title}>
            <DynamicPage sections={sections} />
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const placeData = getPlaceDataById(params.pid);
    return {
        props: {
            placeData,
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
