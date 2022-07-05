import Layout from '../js/components/Layout';
import Homepage from '../js/components/Templates/Homepage.tsx';
import { TITLE_PAGE_HOME } from '../js/utils/constants/titlesConstants.ts';

export default function Home() {
  return (
    <Layout title={TITLE_PAGE_HOME}>
      <Homepage />
    </Layout>
  )
}
