import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import FormLabel from "@material-ui/core/FormLabel";
import { Button } from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  section: {
    padding: "20px 0px",
  },
  heading: {
    fontSize: "14px",
    display: "block",
    fontWeight: "500",
  },

  title: {
    textAlign: "center",
    fontSize: "20px",
    margin: "10px 0px 15px 0px",
    fontWeight: "600",
  },

  accordion: {
    boxShadow: "none",
    borderBottom: "1px solid #ececec",
  },

  ul: {
    listStyle: "none",
    paddingLeft: "10px",
    margin: "0px",
  },

  a: {
    fontSize: "14px",
    textDecoration: "none",
    color: "#585858",
    margin: "10px 0px",
  },

  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  checkCourse: {
    marginBottom: "10px",
    background: "#1358db",
    color: "white",
    textAlign: 'left',
    textTransform: 'capitalize',
    // borderRadius: "5px",
    // padding: "5px 0px",

    "& span": {
      fontFamily: "inherit",
      fontSize: "14px",
      color: "white",
      textAlign: 'left',
      justifyContent: 'flex-start'
    },
  },
  checkCourse2: {
    marginBottom: "10px",
    background: "#d1d1d1",
    color: "white",
    textAlign: 'left',
    textTransform: 'capitalize',
    // borderRadius: "5px",
    // padding: "5px",


    "& span": {
      fontFamily: "inherit",
      fontSize: "14px",
      color: "#444444",
      textAlign: 'left',
      justifyContent: 'flex-start'
    },
  },
  // categoryCard:{
  //     display:"block",
  // },
}));

const Sidebar = ({ categories, state, handleChange, cat_page, url, url_data }) => {
  const classes = useStyles();

  const cat_data = cat_page ? categories.filter((c) => c.slug !== url) : categories;

  return (
    <div>
      <section className={classes.section}>
        <h4 className={classes.title}>Categories</h4>
        <div>
          <FormControl component="fieldset" className={classes.formControl}>
            {cat_page ? (
              <Button className={classes.checkCourse}>
                {url_data.name}
              </Button>
            ) : <></>}
            <FormGroup>
              {cat_data?.map((val, index) => {
                return (
                  <Button className={classes.checkCourse2} href={`${val.slug}`}>
                    {val.name}
                  </Button>
                );
              })}
            </FormGroup>
          </FormControl>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
