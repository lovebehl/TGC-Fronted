import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Header from 'dan-components/LandingPage/header'
import AdvTable from 'dan-components/Tables/AdvTable'
import PapperBlock from 'dan-components/PapperBlock/PapperBlock';
import './custom.css'
import { Button } from '@material-ui/core';

function BlankPage() {
  const title = brand.name + ' - Dashboard';
  const description = brand.desc;

  const logout = () =>{
    localStorage.setItem("tgc-qxzsewa-access-token","")
    localStorage.setItem("tgc-qxzsewa-email","")
    setTimeout(() => {
      window.location.href = '/login';
    }, 200);
  }
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
        <br /><br /><br />
        Dashboard 
        <Button onClick={logout} style={{cursor:"pointer"}}>Logout</Button>
        <AdvTable/>
      {/* </PapperBlock> */}
    </>
  );
}

export default BlankPage;
