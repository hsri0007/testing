import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ComputerIcon from "@material-ui/icons/Computer";
// import { Box, Button, TextField } from "@material-ui/core";
import CourseButtonComponent from "../CourseButtonComponent/CourseButtonComponent";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DemoDatesModal from "../FormModal/DemoDatesModal";
const { format } = require("date-fns");
import { getIPDetails } from "../../../apiCalls";
import * as countryCodes from "country-codes-list";

const countryMap = countryCodes.customList(
  "countryNameEn",
  "{countryCode} +{countryCallingCode}"
);

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "40px 0",
  },
  sideElement: {
    textAlign: "center",
    margin: 0,
    fontSize: "20px",
  },
  headtext: {
    marginTop: "0px",
    color: "#7b7b7b",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  subtext: {
    marginBottom: "0px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#fc3d39",
  },
  text_justify: {
    textAlign: "justify",
  },
  trainingHeading: {
    textAlign: "center",
    "& p": {
      width: "50%",
      margin: "0 auto",
      [theme.breakpoints.down("md")]: {
        width: "90%",
      },
    },
  },
  tableContent: {
    display: "grid",
    gridTemplateColumns: "21% 36% 36%",
    width: "85%",
    margin: "0 auto",
    paddingBottom: "3rem",
    gridColumnGap: "1rem",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "50% 50%",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100%",
    },
    "& table": {
      width: "100%",
      marginTop: "2rem",
    },
    "& td": {
      padding: "20px 13px",
      "& h2": {
        margin: 0,
        fontSize: "1rem",
      },
      "& p": {
        margin: 0,
      },
    },
  },
  tableHeadings: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  specialTables: {
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    padding: "0.4rem",
    "& td": {
      fontWeight: "bold",
      borderBottom: "1px solid #dcdbdb",
    },
  },
  firstTD: {
    display: "flex",
    justifyContent: "center",
    minHeight: "45px",
  },
  demoDatesTD: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.9rem 10px",
    height: "79px",
  },
  // trainingDates: {
  //     display: 'grid',
  //     gridTemplateColumns: 'auto auto auto',
  //     justifyContent: 'space-evenly',
  //     padding: '0 4rem',
  //     [theme.breakpoints.down("md")]: {
  //         gridTemplateColumns: 'auto auto',
  //         justifyContent: 'space-around',
  //     },
  //     [theme.breakpoints.down("xs")]: {
  //         gridTemplateColumns: 'auto',
  //         padding: 0,
  //     },
  //     '& > div': {
  // position: 'relative',
  // marginBottom: '1.5rem',
  // padding: '3rem 3rem',
  // borderRadius: '8px',
  // background: '#e0e0e0',
  // boxShadow: '0 2px 8px 0 rgb(0 0 0 / 25%)'
  //     }
  // },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "blue",
    background: "gray",
  },
  timeRibbons: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "0.3rem 1.2rem",
    // background: 'black',
    borderTopLeftRadius: "8px",
    color: "white",
    fontWeight: 500,
    fontSize: "0.8rem",
    // clipPath: 'polygon(100% 0, 83% 50%, 100% 100%, 0 100%, 0 0)'
  },
  inputDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  formControl: {
    width: "100px",
  },
  singleDate: {
    cursor: "pointer",
    position: "relative",
    marginBottom: "1.5rem",
    padding: "3rem 3rem 1.6rem 3rem",
    borderRadius: "8px",
    background: "#ededed85",
    fontWeight: 600,
    // boxShadow: '0 2px 8px 0 rgb(0 0 0 / 25%)'
  },
  upcomingRoot: {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
    margin: "0 auto",
    padding: "2rem 0",
  },
  submitbttnsRow: {
    display: "flex",
    justifyContent: "center",
    marginTop: "22.4px",
  },
  timeBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#424242",
    fontSize: "0.9rem",
  },
}));

export default function TrainingOptions({ data }) {
  const classes = useStyles();
  // console.log(data, 'data from training options');

  const [time, setTime] = React.useState("");
  const [demoDates, setDemoDates] = React.useState(data.demo_dates);
  const [code, setCode] = React.useState("IN");
  const [selfPaced, setSelfPaced] = React.useState(false);

  const handleSelect = (e) => {
    setCode(e.target.value);
    // setTime()
    console.log(e.target.value, "hello");
  };

  const [open, setOpen] = React.useState(false);
  const [thankyouPopup, setThankyouPopup] = React.useState(false);
  var course = data.overview.course.replace(" Training", "");

  const handleClose = () => {
    setOpen(false);
    setThankyouPopup(false);
    setSelfPaced(false);
  };

  React.useEffect(() => {
    getIPDetails()
      .then((val) => {
        setCode(val.country_code);
      })
      .catch(() => console.log("error in country code"));
  }, []);

  const Script = ({ datedata }) => {
    console.log(data);
    const rupeesShow = () => {
      return data.offer?.selling_price_self_paced
        ? data.offer?.selling_price_self_paced
        : "0.00";
    };
    const dollarShow = () => {
      return data.offer?.selling_price_usd_self_paced
        ? data.offer?.selling_price_usd_self_paced
        : "0.00";
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context":"http://schema.org",
              "@type":"EducationEvent",
              "name":"${datedata.batch_type} Batch - ${data.overview.course}",
              "description": "${data.overview.description.replace(
                /(<([^>]+)>)/gi,
                ""
              )}",
              "performer":"Tekslate",
              "image":"${data.overview.image}",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                  "@type": "VirtualLocation",
                  "url": "https://tekslate.com/${data.overview.url_title}"
              },
              "offers":{
                  "@type": "Offer", 
                  "url" : "https://tekslate.com/${data.overview.url_title}",
                  "availability": "http://schema.org/InStock",
                  "validFrom": "${datedata.schemaStartDate}",
                  "price":  "${
                    data.overview.url_title.includes("hyderabad") ||
                    data.overview.url_title.includes("banglore")
                      ? rupeesShow()
                      : dollarShow()
                  }",
                  "priceCurrency": "${
                    data.overview.url_title.includes("hyderabad") ||
                    data.overview.url_title.includes("banglore")
                      ? "INR"
                      : "USD"
                  }"
              },
              "organizer": {
                  "@type": "Organization",
                  "name": "Tekslate",
                  "url": "https://tekslate.com/"
              },
              "startDate": "${datedata.schemaStartDate}",
              "endDate":"${datedata.schemaEndDate}",
              "url":"https://tekslate.com/${data.overview.url_title}",
              "duration":"${data.overview.duration}"
          }
            `,
        }}
      />
    );
  };

  return (
    <div id="Training_options">
      <section className={classes.section}>
        <Container>
          <div className={classes.trainingHeading}>
            <HeadingsComponent first="Training" last="Options" />
            <h2 style={{ marginTop: "9px" }}>
              Different individuals. Different upgrade goals. Different modes of
              learning.
            </h2>
            <p>
              We got solutions for everyone looking for an AWS Architect course.
              Opt in for your convenient upgrade option, and we will guide you
              through.{" "}
            </p>
          </div>
          <div className={classes.tableContent}>
            <table className={classes.tableHeadings}>
              <tr>
                <td
                  className={classes.firstTD}
                  style={{ padding: "2.4rem 0" }}
                ></td>
              </tr>
              <tr>
                <td>Duration</td>
              </tr>
              <tr>
                <td>One-on-one Session </td>
              </tr>
              <tr>
                <td>Support</td>
              </tr>
              <tr>
                <td>Resources</td>
              </tr>
              <tr>
                <td style={{ height: "79px" }}>Time</td>
              </tr>
              <tr>
                <td>Fee</td>
              </tr>
            </table>
            <div>
              <table className={classes.specialTables}>
                <tr>
                  <td className={classes.firstTD}>
                    <div style={{ paddingRight: "1rem" }}>
                      <ComputerIcon />
                    </div>
                    <div style={{ marginTop: "0.2rem" }}>
                      <h2>Live Online.</h2>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    {data.overview.duration.length === 1
                      ? data.overview.duration + " Hour"
                      : data.overview.duration + " Hours"}
                    {/* {data.overview.duration} Hours */}
                  </td>
                </tr>
                <tr>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>24x7</td>
                </tr>
                <tr>
                  <td>Additional tips from the trainer</td>
                </tr>
                <tr>
                  <td className={classes.demoDatesTD}>
                    {demoDates && demoDates.length > 2 ? (
                      demoDates
                        .filter((c, i) => i < 2)
                        .map((val) => {
                          const date = new Date(val.demo_date);
                          date.setTime(
                            date.getTime() +
                              date.getTimezoneOffset() * 60 * 1000
                          );
                          var offset = -300; //Timezone offset for EST in minutes.
                          var estDate = new Date(
                            date.getTime() + offset * 60 * 1000
                          );
                          if (code === "IN") {
                            return (
                              <p style={{ marginBottom: "0.3rem" }}>
                                {format(date, "dd MMM yyyy, hh:mm a")} IST
                              </p>
                            );
                          } else {
                            return (
                              <p style={{ marginBottom: "0.3rem" }}>
                                {format(new Date(estDate), "dd MMM yyyy")},{" "}
                                {modifyDateFun(estDate)} EST
                              </p>
                            );
                          }
                        })
                    ) : (
                      <p>At your convenience</p>
                    )}
                  </td>
                </tr>
                {data.offers !== null && data.offers?.selling_price !== 0 && (
                  <tr>
                    <td style={{ border: 0 }}>₹{data.offers.selling_price}</td>
                  </tr>
                )}
                {(data.offers === null || data.offers?.selling_price === 0) && (
                  <tr>
                    <td style={{ border: 0 }}>&nbsp;</td>
                  </tr>
                )}
              </table>
              <div className={classes.submitbttnsRow}>
                <CourseButtonComponent
                  setSelfPaced={setSelfPaced}
                  selfPaced={false}
                  subject="Register Now"
                  setOpen={setOpen}
                  arrow={false}
                />
              </div>
            </div>
            <div>
              <table className={classes.specialTables}>
                <tr>
                  <td className={classes.firstTD}>
                    <div style={{ paddingRight: "1rem" }}>
                      <OndemandVideoIcon />
                    </div>
                    <div style={{ marginTop: "0.2rem" }}>
                      <h2>Self-Paced</h2>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    {data.course_videos?.length < 1
                      ? data.overview.duration.length === 1
                        ? data.overview.duration + " Hour"
                        : data.overview.duration + " Hours"
                      : data.course_videos?.length === 1
                      ? +data.course_videos?.length + " Video"
                      : data.course_videos?.length + " Videos"}
                  </td>
                </tr>
                <tr>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Weekdays & Working Hours</td>
                </tr>
                <tr>
                  <td>Accessible through LMS </td>
                </tr>
                <tr>
                  <td style={{ height: "79px" }}>At your convenience</td>
                </tr>
                {data.offers !== null &&
                  data.offers?.selling_price_self_paced !== 0 && (
                    <tr>
                      <td style={{ border: 0 }}>
                        ₹{data.offers.selling_price_self_paced}
                      </td>
                    </tr>
                  )}
                {(data.offers === null ||
                  data.offers?.selling_price_self_paced === 0) && (
                  <tr>
                    <td style={{ border: 0 }}>&nbsp;</td>
                  </tr>
                )}
              </table>
              <div className={classes.submitbttnsRow}>
                {(data.offers === null ||
                  data.offers?.selling_price_self_paced === 0) && (
                  <CourseButtonComponent
                    selfPaced={true}
                    setSelfPaced={setSelfPaced}
                    subject="Get Pricing"
                    setOpen={setOpen}
                    arrow={false}
                  />
                )}
                {data.offers !== null &&
                  data.offers?.selling_price_self_paced !== 0 && (
                    <CourseButtonComponent
                      selfPaced={true}
                      setSelfPaced={setSelfPaced}
                      subject="Register Now"
                      setOpen={setOpen}
                      arrow={false}
                    />
                  )}
              </div>
            </div>
          </div>
        </Container>
        {demoDates.length > 0 ? (
          <Container>
            <div className={classes.upcomingRoot}>
              <h2>{data.overview.course} Upcoming Batches</h2>
              {/* <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={code}
                                onChange={handleSelect}
                                defaultValue={code}
                                style={{ marginBottom: '1rem' }}
                            >
                                {Object.keys(countryMap).map((key, value) => (
                                    <MenuItem value={countryMap[key]}> {key}</MenuItem>
                                ))} */}
              {/* {Object.keys(countryMap).map(function (key) {
                                    return <MenuItem value={key}>{countryMap[key]}</MenuItem>
                                })} */}
              {/* </Select>
                        </FormControl> */}
            </div>
            {/* <div className={classes.trainingDates} style={{ border: '1px solid red' }}> */}
            <div>
              <Grid container spacing={3}>
                <Grid item container md={7} xs={12} style={{ margin: "auto" }}>
                  {/* {demoDates && demoDates.length > 2 ? ( */}
                  {demoDates.map((val, i) => {
                    // console.log(val.demo_date, 'dates')
                    var dt = new Date(val.demo_date);
                    dt.setTime(
                      dt.getTime() + dt.getTimezoneOffset() * 60 * 1000
                    );
                    var offset = -300; //Timezone offset for EST in minutes.
                    var estDate = new Date(dt.getTime() + offset * 60 * 1000);
                    // var istDate = format(new Date(val.demo_date), 'dd MMM, yyyy') - {addMonthDate(val.demo_date)}
                    return (
                      <>
                        <Grid
                          key={i}
                          item
                          container
                          md={6}
                          xs={12}
                          justifyContent="center"
                        >
                          <div
                            className={classes.singleDate}
                            onClick={() => setOpen(true)}
                          >
                            <div
                              className={classes.timeRibbons}
                              style={{
                                background:
                                  val.batch_type === "Weekday"
                                    ? "#151c2ade"
                                    : "#3778ff",
                              }}
                            >
                              {val.batch_type}
                            </div>
                            <div style={{ paddingBottom: "0.8rem" }}>
                              {code === "IN" ? (
                                <>
                                  {format(
                                    new Date(val.demo_date),
                                    "dd MMM, yyyy"
                                  )}{" "}
                                  - {addMonthDate(val.demo_date)}
                                </>
                              ) : (
                                <>
                                  {format(new Date(estDate), "dd MMM, yyyy")} -{" "}
                                  {addMonthDate(estDate)}
                                </>
                              )}
                            </div>
                            <div className={classes.timeBox}>
                              <div style={{ paddingTop: "5px" }}>
                                <AccessTimeIcon style={{ fontSize: "1rem" }} />
                              </div>
                              <div
                                style={{
                                  marginLeft: "0.3rem",
                                  fontSize: "0.9rem",
                                  fontWeight: "600",
                                }}
                              >
                                {" "}
                                {code === "IN"
                                  ? modifyDateFun(val.demo_date) + " IST"
                                  : modifyDateFun(estDate) + " EST"}
                                {}
                              </div>
                            </div>
                          </div>
                        </Grid>
                        <Script
                          datedata={{
                            schemaStartDate: format(
                              new Date(val.demo_date),
                              "yyyy-MM-dd"
                            ),
                            schemaEndDate: addSchemaDate(val.demo_date),
                            batch_type: val.batch_type,
                          }}
                        />
                      </>
                    );
                  })}
                </Grid>
                <Grid
                  item
                  md={5}
                  xs={12}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ padding: "1rem" }}>
                      <img
                        src="https://tekslateassets.s3.amazonaws.com/images/calendar.png"
                        alt="calendar tekslate"
                        height="100px"
                        width="100px"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p>Schedules Doesn't Suit You ?</p>
                      <p>
                        Our Team can set up a batch at your convinient time.
                      </p>
                      <div>
                        <CourseButtonComponent
                          subject="Let Us Know"
                          setOpen={setOpen}
                          arrow={false}
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
              {/* {demoDates.splice(0, 4).map((c, i) => (
                                <div className={classes.singleDate} onClick={() => setOpen(true)}>
                                    <div className={classes.timeRibbons}>
                                        {c.batch_type}
                                    </div>
                                    <div style={{ paddingBottom: '0.8rem' }}>{format(new Date(c.demo_date), 'dd MMMM yyyy')} to {addMonthDate(c.demo_date)}</div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#424242', fontSize: '0.9rem' }}>
                                        <div style={{ paddingTop: '4px' }}><AccessTimeIcon /></div>
                                        <div style={{ marginLeft: '0.5rem' }}>
                                            {format(new Date(c.demo_date), 'hh:mm a')}
                                        </div>
                                    </div>
                                </div>
                            ))} */}
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ padding: '1rem' }}>
                                <img src='https://tekslateassets.s3.amazonaws.com/images/calendar.png' alt='calendar tekslate' height="100px" width='100px' />
                            </div>
                            <div>
                                <p>Schedules Doesn't Suit You ?</p>
                                <p>
                                    Our Team can set up a batch at your convinient time.
                                </p>
                                <div>
                                    <CourseButtonComponent subject='Let Us Know' setOpen={setOpen} arrow={false} />
                                </div>
                            </div>
                        </div> */}
          </Container>
        ) : (
          ""
        )}
        <DemoDatesModal
          selfPaced={selfPaced}
          course={course}
          value={open}
          handleClose={handleClose}
          subject={
            selfPaced
              ? `${course} - SelfPaced Register Now`
              : `${course} - Live Online Register Now`
          }
          thankyouPopup={thankyouPopup}
          setThankyouPopup={setThankyouPopup}
        />
      </section>
    </div>
  );
}

function addMonthDate(data) {
  let date = new Date(data);
  let newDate = date.setMonth(date.getMonth() + 1);
  return format(new Date(newDate), "dd MMM, yyyy");
}

function addSchemaDate(data) {
  let date = new Date(data);
  let newDate = date.setMonth(date.getMonth() + 1);
  return format(new Date(newDate), "yyyy-MM-dd");
}

function modifyDateFun(data) {
  // console.log(data, 'date ')
  let d = new Date(data);
  var numberOfMlSeconds = d.getTime();
  var addMlSeconds = 330 * 60 * 1000;
  var newDateObj = new Date(numberOfMlSeconds - addMlSeconds);
  // let newDate = d.setHours(d.getHours() - 5);
  return format(new Date(newDateObj), "hh:mm a");
}

// function usaDateFun(data) {
//     // console.log(data, 'date ')
//     let d = new Date(data);
//     var numberOfMlSeconds = d.getTime();
//     var addMlSeconds = 300 * 60 * 1000;
//     var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
//     // let newDate = d.setHours(d.getHours() - 5);
//     return format(new Date(newDateObj), 'hh:mm a')
// }

// let date = new Date;
// aryIannaTimeZones.forEach((timeZone) => {

//   let strTime = date.toLocaleString("en-US", {
//     timeZone: `${timeZone}`
//   });
//   console.log(timeZone, strTime);
// });
