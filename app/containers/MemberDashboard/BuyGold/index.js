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

function BuyGold() {
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
      <PapperBlock title="Buy Gold" desc="">
        <Grid
          container
          spacing={3}
          xs={12}
          align="center"
          justify="center"
          direction="row"
        >
          <Grid item xs={6}>
            <TextField
              id="outlined-with-placeholder"
              label="US Dollar Amount"
              placeholder="US Dollar Amount"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-with-placeholder"
              label="Card Number"
              placeholder="Card Number"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-with-placeholder"
              label="CVR code"
              placeholder="CVR code"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-with-placeholder"
              label="Expiration Date"
              placeholder="Expiration Date"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Send Now
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" color="primary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </PapperBlock>
    </div>
  );
}

export default BuyGold;
