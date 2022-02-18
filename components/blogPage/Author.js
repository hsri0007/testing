import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3), 
  },
  paper: {
    boxShadow: '0 2px 18px 0 rgb(0 0 0 / 12%)'
    },
  authdetails: {
    display: "flex",
    paddingLeft: "10px",
    paddingTop: "20px"
  },
  authdetails1: {
    display: "flex",
    flexGrow: "1",
    paddingLeft: "10px",
    paddingTop: "20px"
  },
  authhead: {
    textAlign: "center",
    paddingTop: "0px",
    paddingBottom:"5px"
  },
  horizontalbottom: {
    borderTop: "0.1px solid",
    color: "#ababab"
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginTop:'10px',
    marginLeft: "18px",
    // marginRight: "18px",borderRadius:"50%",
    // boxShadow: "0 2px 18px 0 rgb(0 0 0 / 8%)",
  },
  aboutauth: {
    display: "flex",
  },
  aboutauth2: {
    display: "flex",
    flexDirection:"column",
    alignItems:"center"
  },
  verticalright: {
    borderRight: "0.1px solid",
    paddingLeft: "20px",
    marginTop: "10px",
    marginBottom: "10px",
    color: "#ababab"
  },
  authname: { flex: "1" },
  authname1: { flex: "2", paddingRight: "10px",},
  authbio: { flex: "1" },
  authbio1: { flex: "2", paddingRight: "10px", paddingBottom: "10px" }
}));

export default function AutoGridNoWrap() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <div className={classes.root} >
      <Paper className={classes.paper}  >
        <Typography className={classes.authhead} variant="h5">
           <b>About Author</b>
        </Typography>
        <div className={classes.horizontalbottom} />
          <div className={matches?classes.aboutauth2:classes.aboutauth}>

            <div className={classes.authimg}>
              <img
                alt="Authorlogo"
                src="https://tekslateassets.s3.amazonaws.com/images/logo.svg"
                className={classes.large}
              />
            </div>
            <div className={classes.verticalright} />
            <div>
              <div className={classes.authdetails}>
                <Typography variant="subtitle1" className={classes.authname}>
                  <b>Name</b>
                </Typography>
                <Typography className={classes.authname1}>
                  TekSlate
                </Typography>
              </div>
              <div className={classes.authdetails1}>
                <Typography variant="subtitle1" className={classes.authbio}>
                  <b>Author Bio</b>
                </Typography>
                <Typography className={classes.authbio1}>
                  TekSlate is the best online training provider in delivering world-class IT skills to individuals and corporates from all parts of the globe. We are proven experts in accumulating every need of an IT skills upgrade aspirant and have delivered excellent services. We aim to bring you all the essentials to learn and master new technologies in the market with our articles, blogs, and videos. Build your career success with us, enhancing most in-demand skills .
                </Typography>
              </div>
            </div>
          </div>
      </Paper>
    </div>
  );
}
