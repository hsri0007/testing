import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Payment from './payment';
import Details from './details';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  section: {
    padding: "20px 0px 60px 0px",
  },
  bannerSection: {
    background: "#101d42",
    padding: "30px 0px",
  },
  stepper: {
    background: "linear-gradient(145deg, #e1e1e1, #ffffff)",
    boxShadow: "0 0 0 1px #e7e7e7, 0 2px 4px 0 rgb(0 0 0 / 10%)",
    borderRadius: "5px",
  },
  mainbtn: {
    margin: "auto",
    fontSize: "18px",
    padding: "8px 16px",
    background: "#1358db",
    color: "white",
    textTransform: "none",
  },
  proceedbtn: {
    margin: "auto",
    fontSize: "18px",
    padding: "8px 16px",
    border: '2px solid #1358db',
    background: "none",
    color: "#000",
    textTransform: "none",
  },
  checkicon: {
    fontSize: "100px",
    color: "#000",
  },
  paySuccess: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
  }

}));

function getSteps() {
  return ['User Details', 'Secure Payment'];
}

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return <Details />
//     case 1:
//       return <Payment />
//     default:
//       return 'Unknown stepIndex';
//   }
// }

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [trainingMode, setTrainingMode] = React.useState("selfPaced");
  const [course, setCourse] = React.useState("");
  const [currency, setCurrency] = React.useState("INR");
  const [price, setPrice] = React.useState("");

  const handleNext = () => {
    // const Scroll = () => {
    // const scrollToElement = require("scroll-to-element");
    // scrollToElement("#final-payment", {
    //   offset: -1500,
    //   ease: "outQuart",
    //   duration: 1000,
    // });
    // };
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const requiredFields = () => {
    alert('All Fields are Required*');
  }

  const handleBack = () => {
    console.log('hello')
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <section className={classes.bannerSection}>
        <Container maxWidth="lg">
          <Stepper className={classes.stepper} activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </section>
      <section className={classes.section}>
        <Container maxWidth="lg">
          <div>
            {activeStep === steps.length ? (
              <div className={classes.paySuccess}>
                <div>
                  <CheckCircleOutlineIcon className={classes.checkicon} />
                </div>
                <h2 className={classes.instructions}>Payment Successful</h2>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>{activeStep === 0 ?
                  <Details handleNext={handleNext} price={price} setPrice={setPrice} course={course} setCourse={setCourse} setCurrency={setCurrency} currency={currency} trainingMode={trainingMode} setTrainingMode={setTrainingMode} />
                  : (
                    <div id='final-payment'>
                      <Payment setActiveStep={setActiveStep} price={price} course={course} currency={currency} trainingMode={trainingMode} />
                    </div>
                  )}
                </Typography>
                <div>
                  <Container maxWidth="md">
                    <Grid container spacing={3}>

                      {/* <Grid style={{ marginLeft: "auto", display: "flex" }} item lg={3} md={3} sm={6} xs={6}>
                        {activeStep !== 0 && (<Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.backButton}
                        >
                          Back
                        </Button>)}
                      </Grid> */}
                      {/* {activeStep === 0 && <Grid style={{ marginRight: "auto", display: "flex" }} item lg={3} md={3} sm={6} xs={6}>
                        <Button className={course.length > 1 && price.length > 1 ? classes.mainbtn : classes.proceedbtn} variant="contained"
                            onClick={course.length > 1 && price.length > 1 ? handleNext : requiredFields}
                          >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Proceed'}
                        </Button>
                      </Grid>} */}
                    </Grid>
                  </Container>


                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
