import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Header from 'dan-components/LandingPage/header'
import AdvTable from 'dan-components/Tables/AdvTable'
import PapperBlock from 'dan-components/PapperBlock/PapperBlock';
import './custom.css'

function BlankPage() {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {/* <PapperBlock title="Blank Page" desc="Some text description"> */}
        <Header/>
        <AdvTable/>
      {/* </PapperBlock> */}
    </>
  );
}

export default BlankPage;
