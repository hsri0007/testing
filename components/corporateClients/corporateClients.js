import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  clients: {
    width: "120px",
    filter: "grayscale(1)",
    margin: "auto",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px",
    },
  },

  clientsBG: {
    padding: "43px 0 40px",
    backgroundColor: "#f9fafa",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <section className={classes.clientsBG}>
        <Grid container>
          <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
            <img
              src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/zealousys.png"
              alt="zealousys"
              className={classes.clients}
            />
          </Grid>
          <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
            <img
              src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/consagous.png"
              alt="consagous"
              className={classes.clients}
            />
          </Grid>
          <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
            <img
              src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/codiant.png"
              alt="codiant"
              className={classes.clients}
            />
          </Grid>
          <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
            <img
              src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/appscrip.png"
              alt="appscrip"
              className={classes.clients}
            />
          </Grid>
          <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
            <img
              src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/promatics.png"
              alt="promatics"
              className={classes.clients}
            />
          </Grid>
          <Grid style={{ margin: "auto" }} item lg={2} md={3} sm={6} xs={6}>
            <img
              src="https://newtekslateassets.s3.us-west-2.amazonaws.com/assets/images/clients/codebrightly.png"
              alt="codebrightly"
              className={classes.clients}
            />
          </Grid>
        </Grid>
      </section>
    </React.Fragment>
  );
}
