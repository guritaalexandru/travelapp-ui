import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from '../../js/components/Layout';
import SubPlaces from '../../js/components/Templates/SubPlaces.tsx';
import { TITLE_SUBPAGES_PLACES } from '../../js/utils/constants/titlesConstants.ts';

//refactor this one to depend on isReady, not on pagetitle
export default function Locations() {
    const { query, isReady } = useRouter();
    let pageTitle, pid;

    useEffect(() => {
        if (!isReady) return;
      }, [isReady])

    if(isReady) {
        pid = query.pid;
        pageTitle = TITLE_SUBPAGES_PLACES.find(item => item.pid === pid)?.title;
    }

    return (
        <Layout title={ pageTitle ? pageTitle : '404'}>
            { pageTitle ? <SubPlaces pid={pid} /> : <h1>404</h1> }
        </Layout>
  )
}
