import React from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import AdvancedTable from "../../Tables/demos/AdvFilter";
import CurrencyWidget from "../../../components/MemberComponents/Components/CurrencyWidget";

const MemberDashboard = () => {
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="TGC Currency and Gold Once">
        <CurrencyWidget />
      </PapperBlock>
      <PapperBlock title="Transcations Details" desc="">
        <AdvancedTable title={"Transcation History"} />
      </PapperBlock>
    </div>
  );
}

export default MemberDashboard;
