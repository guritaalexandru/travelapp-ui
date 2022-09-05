import Layout from '../../js/components/Layout';
import DynamicPage from '../../js/components/Templates/DynamicPage';
import { getArticleDataByPath } from '../../js/utils/functions/pageDataFunctions';

import { DynamicPageProps } from '../../js/utils/types/DynamicData'

export default function ArticlesCollection({ pageData }: DynamicPageProps) {
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

export async function getStaticProps() {
  const pageData = await getArticleDataByPath('index');

  return {
    props: {
      pageData,
    },
  };
}
