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

function SendMoney() {
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
          spacing={4}
          xs={12}
          align="center"
          justify="center"
          direction="row"
        >
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="Recipient-simple">Recipient</InputLabel>
              <Select
                value={"John"}
                // onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "Recipient-simple",
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 18 }}>
            <TextField
              id="outlined-with-placeholder"
              label="TG Dollar Amount"
              placeholder="Placeholder"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-with-placeholder"
              label="PIN"
              placeholder="Placeholder"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-with-placeholder"
              label="Notes"
              placeholder="Placeholder"
              multiline
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
              Later
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

export default SendMoney;
