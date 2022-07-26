import Layout from '../../js/components/Layout';
import MainArticles from '../../js/components/Templates/MainArticles.tsx';
import { TITLE_PAGE_ARTICLES } from '../../js/utils/constants/titlesConstants.ts';

export default function ArticlesCollection() {
  return (
    <Layout title={TITLE_PAGE_ARTICLES}>
      <MainArticles />
    </Layout>
  )
}
