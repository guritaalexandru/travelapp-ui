import Layout from '../../js/components/Layout';
import MainPlaces from '../../js/components/Templates/MainPlaces.tsx';
import { TITLE_PAGE_PLACES } from '../../js/utils/constants/titlesConstants.ts';

export default function Locations() {
  return (
    <Layout title={TITLE_PAGE_PLACES}>
      <MainPlaces />
    </Layout>
  )
}
