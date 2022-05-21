import React from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import AdvancedTable from "../../Tables/demos/AdvFilter";
import CurrencyWidget from "../../../components/MemberComponents/Components/CurrencyWidget";

const data = [
  ["23-Aug-2022",262.23,'Gabby George', 'Business Analyst',  'active', 100000],
  ["23-Aug-2022",262.23,'Jaden Collins', 'Attorney',  'non-active', 500000],
  ["23-Aug-2022",262.23,'Aiden Lloyd', 'Business Consultant',  'active', 200000],
  ["23-Aug-2022",262.23,'Franky Rees', 'Business Analyst',  'active', 50000],
  ["23-Aug-2022",262.23,'Aaren Rose', 'Business Consultant', 'unknown', 75000],
  ["23-Aug-2022",262.23,'Blake Duncan', 'Business Management Analyst',  'active', 94000],
  ["23-Aug-2022",262.23,'Frankie Parry', 'Agency Legal Counsel',  'non-active', 210000],
  ["23-Aug-2022",262.23,'Lane Wilson', 'Commercial Specialist', 'active', 65000],
  ["23-Aug-2022",262.23,'Robin Duncan', 'Business Analyst',  'unknown', 77000],
  ["23-Aug-2022",262.23,'Mel Brooks', 'Business Consultant', 'active', 135000],
  ["23-Aug-2022",262.23,'Harper White', 'Attorney',  'non-active', 420000],
  ["23-Aug-2022",262.23,'Kris Humphrey', 'Agency Legal Counsel',  'active', 150000],
  ["23-Aug-2022",262.23,'Frankie Long', 'Industrial Analyst', 'active', 170000],
  ["23-Aug-2022",262.23,'Brynn Robbins', 'Business Analyst',  'active', 90000],
  ["23-Aug-2022",262.23,'Justice Mann', 'Business Consultant',  'non-active', 33000],
  ["23-Aug-2022",262.23,'Addison Navarro', 'Business Management Analyst',  'non-active', 295000],
  ["23-Aug-2022",262.23,'Jesse Welch', 'Agency Legal Counsel',  'active', 100000],
  ["23-Aug-2022",262.23,'Eli Mejia', 'Commercial Specialist', 'active', 400000],
  ["23-Aug-2022",262.23,'Gene Leblanc', 'Industrial Analyst',  'active', 110000],
  ["23-Aug-2022",262.23,'Danny Leon', 'Computer Scientist',  'non-active', 220000],
  ["23-Aug-2022",262.23,'Lane Lee', 'Corporate Counselor', 'unknown', 180000],
  ["23-Aug-2022",262.23,'Jesse Hall', 'Business Analyst',  'active', 99000],
  ["23-Aug-2022",262.23,'Danni Hudson', 'Agency Legal Counsel',  'active', 90000],
  ["23-Aug-2022",262.23,'Terry Macdonald', 'Commercial Specialist',  'active', 140000],
  ["23-Aug-2022",262.23,'Justice Mccarthy', 'Attorney',  'active', 330000],
  ["23-Aug-2022",262.23,'Silver Carey', 'Computer Scientist',  'active', 250000],
  ["23-Aug-2022",262.23,'Franky Miles', 'Industrial Analyst',  'active', 190000],
  ["23-Aug-2022",262.23,'Glen Nixon', 'Corporate Counselor',  'non-active', 80000],
  ["23-Aug-2022",262.23,'Gabby Strickland', 'Business Process Consultant', 'unknown', 45000],
  ["23-Aug-2022",262.23,'Mason Ray', 'Computer Scientist', 'active', 142000]
];

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
        <AdvancedTable title={"Transcation History"} data={data}/>
      </PapperBlock>
    </div>
  );
}

export default MemberDashboard;
