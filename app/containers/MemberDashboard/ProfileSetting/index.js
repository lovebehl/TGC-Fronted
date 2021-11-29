import React from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import UserProfile from "../../Pages/UserProfile";
import MemberUserProfile from "../../../components/MemberComponents/Components/MemberUserProfile";

function ProfileSetting() {
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
      <PapperBlock title="Profile Setting" desc="">
        <MemberUserProfile />
      </PapperBlock>
    </div>
  );
}

export default ProfileSetting;
