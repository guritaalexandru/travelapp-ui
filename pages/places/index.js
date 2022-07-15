import Layout from '../../js/components/Layout';
import Places from '../../js/components/Templates/Places.tsx';
import { TITLE_PAGE_PLACES } from '../../js/utils/constants/titlesConstants.ts';

export default function Locations() {
  return (
    <Layout title={TITLE_PAGE_PLACES}>
      <Places />
    </Layout>
  )
}
