import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container, Paper, Link, Grid, List } from "@material-ui/core";
import MinimizeIcon from "@material-ui/icons/Minimize";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FlareIcon from "@material-ui/icons/Flare";
import FooterComponent from "../components/footerComponent/footerComponent";
import ContactForm from "../components/contactForm/contactForm";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },

  Section4: { fontSize: "17px" },
  Accordion1: {
    paddingBottom: "14px",
    listStyle: "none",
    color: "grey",
    paddingLeft: "21px"
  },
  Accordion2: {
    paddingLeft: "20px"
  },
  Lookingforheading: {
    paddingTop: "30px",
    paddingLeft: "20px",
    fontSize: "25px"
  },
  Lookingforheading1: {
    paddingLeft: "30px",
    paddingBottom: "20px",
    color: "white"
  },
  copyright1: {
    listStyle: "none",
    // color: "grey",
    display: "inline-flex"
  },
  MinimizeIcon: { color: "#2e3191", paddingRight: "18px" },
  copyright: { paddingTop: "30px", paddingLeft: "20px", fontSize: "25px" },
  copyrightpoint: {
    paddingLeft: "30px"
  },
  Section5: {
    paddingBottom: "15px",
    backgroundColor: "#f9fafa",marginBottom:"50px",
  },
  GuidelinesHeading: {
    paddingTop: "30px",
    paddingLeft: "20px",
    paddingBottom: "10px",
    fontSize: "25px"
  },
  breadcumHome: {
    display: "flex",
    color: "grey",
    paddingLeft: "20px",
    paddingTop: "30px",
    width: "90%"
  },
  Section1: {
    paddingLeft: "20px",
    paddingTop: "20px",
    backgroundColor: "#f9fafa"
  },
  point1: {
    paddingLeft: "20px"
  },
  point: { fontSize: "25px" },
  Section2: {
    backgroundColor: "#2e3191",
    padding: "43px 0 40px",
    color: "white",
    marginTop: "40px"
  },
  categoryname: {
    marginTop: "40px",
    marginBottom: "40px"
  },
  Guidelines: { backgroundColor: "#f9fafa" },
  Guidelinepoint: { paddingLeft: "30px" },
  titleIcon2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px",
    width: "400px",
    height: "100px",
    boxShadow: "0 2px 18px 0 rgb(0 0 0 / 8%)",
    justifyContent: "center",
   color:"black",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#2e3191",
      color: "white",
    }
  },
  titleIcon: { flex: "0.5", color: "black", },
  titleIcon1: { flex: "0.5", color: "black" },
  titleIcon3: {
    flex: "2",
   fontSize: "20px",
   },
  refer: { textDecoration: "none", },
  underline: {
    border: "none",
    margin: "5px auto 20px 0px",
    borderTop: "4px solid #ffcf00",
    width: "10%"
  },

  bannerbg: {
    backgroundImage: `url("https://tekslateassets.s3.amazonaws.com/images/writebanner.jpg")`,
    backgroundPosition: "bottom center",
    minHeight: "250px",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center", 
   
    
  },
  maintext: {
    color: " #fff",
    fontSize: "40px",
    fontWeight: "500",
    margin: "auto",
    padding: "15px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px"
    }
  }
}));

export default function writeforuspage() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <section className={classes.bannerbg}>
        <Container maxWidth="md">
          <Typography className={classes.maintext}>Write For Us</Typography>
          <hr className={classes.underline} />
          <Typography
            style={{ color: "white", fontWeight: "30px", fontSize: "20px" }}
          >
            A Great Oppertunity To Collaborate
          </Typography>
        </Container>
      </section>

      <Container>
        <div className={classes.root}>
          <div>
            <div className={classes.breadcumHome}>
              <Link variant="subtitle1" href="/" target="blank">
                Home
              </Link>
              <Typography variant="subtitle1">/</Typography>
              <Typography variant="subtitle1">Write for us</Typography>
            </div>

            <div className={classes.Section1}>
              <Typography className={classes.point} variant="h5">
                <b>Write for us</b>
                <hr className={classes.underline} />
              </Typography>
              <Typography variant="subtitle1" className={classes.point1}>
                <List>
                  Hi, there! Thank you for your interest in contributing a guest
                  blog for Tekslate. We're glad you've arrived.
                </List>
                <List>
                  Last month, Tekslate had over 100,000 unique visitors, and
                  we're always on the lookout for more creative writers to join
                  our ranks.
                </List>
                <List>
                  We'd love to hear from you if you have great writing talents
                  and would like to share your knowledge with a large audience
                  of techies, marketers, and more. We're looking for tech-savvy
                  professionals who can contribute content on various IT
                  platforms.
                </List>
                <List>
                  Please go over this entire page; it answers any questions you
                  have regarding the type of content we're looking for and the
                  submission procedure.
                </List>
              </Typography>
            </div>

            <div className={classes.backgroundcolor}>
              <div style={{ padding: "5px" }} className={classes.Section2}>
                <Typography className={classes.Lookingforheading} variant="h5">
                  <b>What we're looking for ?</b>
                  <hr className={classes.underline} />
                </Typography>
                <Typography className={classes.Lookingforheading1}>
                  Articles can be about any of the technologies for which we
                  provide training (you can browse our website to get more
                  info). Your content should educate learners of all levels on
                  what's new and essential in the following categories.
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.categoryname}>
            <Grid container spacing={3}>
              <Grid item sm={12} md={4} lg={4}>
                <a href="/all-courses" target="blank" className={classes.refer}>
                  <Paper className={classes.titleIcon2}>
                    <FlareIcon className={classes.titleIcon} />
                    <Typography className={classes.titleIcon3}>
                      <b>Business Intelligence & Analytics </b>
                    </Typography>
                    <ArrowForwardIosIcon className={classes.titleIcon1} />
                  </Paper>
                </a>
              </Grid>
              <Grid item sm={12} md={4} lg={4}>
                <a href="/all-courses" target="blank" className={classes.refer}>
                  <Paper className={classes.titleIcon2}>
                    <FlareIcon className={classes.titleIcon} />{" "}
                    <Typography className={classes.titleIcon3}>
                      <b>Cloud Computing</b>
                    </Typography>
                    <ArrowForwardIosIcon className={classes.titleIcon1} />
                  </Paper>
                </a>
              </Grid>
              <Grid item sm={12} md={4} lg={4}>
                <a
                  href="/all-courses"
                  target="_blank"
                  className={classes.refer}
                >
                  <Paper className={classes.titleIcon2}>
                    <FlareIcon className={classes.titleIcon} />
                    <Typography className={classes.titleIcon3}>
                      <b>Programming & Frameworks</b>
                    </Typography>
                    <ArrowForwardIosIcon className={classes.titleIcon1} />
                  </Paper>
                </a>
              </Grid>
              <Grid item sm={12} md={4} lg={4}>
                <a href="/all-courses" target="blank" className={classes.refer}>
                  <Paper className={classes.titleIcon2}>
                    <FlareIcon className={classes.titleIcon} />{" "}
                    <Typography className={classes.titleIcon3}>
                      <b> Customer Relationship Management</b>
                    </Typography>
                    <ArrowForwardIosIcon className={classes.titleIcon1} />
                  </Paper>
                </a>
              </Grid>
              <Grid item sm={12} md={4} lg={4}>
                <a href="/all-courses" target="blank" className={classes.refer}>
                  <Paper className={classes.titleIcon2}>
                    <FlareIcon className={classes.titleIcon} />
                    <Typography className={classes.titleIcon3}>
                      <b> Database Management and Administration</b>
                    </Typography>
                    <ArrowForwardIosIcon className={classes.titleIcon1} />
                  </Paper>
                </a>
              </Grid>
              <Grid item sm={12} md={4} lg={4}>
                <a href="/all-courses" target="blank" className={classes.refer}>
                  <Paper className={classes.titleIcon2}>
                    <FlareIcon className={classes.titleIcon} />{" "}
                    <Typography className={classes.titleIcon3}>
                      <b> Business Process Management</b>
                    </Typography>
                    <ArrowForwardIosIcon className={classes.titleIcon1} />
                  </Paper>
                </a>
              </Grid>

              <Grid item sm={12} md={4} lg={4}>
                <a href="/all-courses" target="blank" className={classes.refer}>
                  <Paper className={classes.titleIcon2}>
                    <FlareIcon className={classes.titleIcon} />
                    <Typography className={classes.titleIcon3}>
                      <b>Software and Automation Testing </b>
                    </Typography>
                    <ArrowForwardIosIcon className={classes.titleIcon1} />
                  </Paper>
                </a>
              </Grid>
              <Grid item sm={12} md={4} lg={4}>
                <a href="/all-courses" target="blank" className={classes.refer}>
                  <Paper className={classes.titleIcon2}>
                    <FlareIcon className={classes.titleIcon} />
                    <Typography className={classes.titleIcon3}>
                      <b>IT Service Management</b>
                    </Typography>
                    <ArrowForwardIosIcon className={classes.titleIcon1} />
                  </Paper>
                </a>
              </Grid>
              <Grid item sm={12} md={4} lg={4}>
                <a href="/all-courses" target="blank" className={classes.refer}>
                  <Paper className={classes.titleIcon2}>
                    <FlareIcon className={classes.titleIcon} />
                    <Typography className={classes.titleIcon3}>
                      <b>RPA Certification</b>
                    </Typography>
                    <ArrowForwardIosIcon className={classes.titleIcon1} />
                  </Paper>
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.Guidelines}>
          <div>
            <Typography className={classes.GuidelinesHeading} variant="h5">
              <b>Submission Guidelines:</b>
              <hr className={classes.underline} />
            </Typography>
            <Typography className={classes.Guidelinepoint}>
              <List>
                Our content is of the highest quality and is considered a
                standard in the field of technology education. We expect you to
                do the same. We follow a simple writing style that appeals to a
                broad range of audiences.{" "}
              </List>
              <List>
                Blog posts should be between 800 and 1200 words long. To ensure
                simple and structured reading, provide a title, relevant
                subheads, bullets, and numbers where needed.
              </List>
              <List>
                Wherever possible include relevant code, data sets, and
                snapshots to make it easy for the learner to understand the
                concepts better.
              </List>
            </Typography>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.Section4} variant="h6">
                  <b>Why Write For Tekslate?</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.Accordion1}>
                  <List>
                    Writing for us allows you to broaden your knowledge and
                    expertise in specific subjects while also allowing you to
                    demonstrate your research and writing skills to a global
                    audience. Our readers visit the Tekslate blog to learn about
                    today's most cutting-edge technologies and the careers that
                    support them.
                  </List>

                  <List>
                    In addition to being seen by our global audience, writing
                    for us allows you to build professional connections with an
                    author bio below every article you post.
                  </List>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.Section4} variant="h6">
                  <b>What Different Post Types That We Accept?</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.Accordion1}>
                  <List style={{ color: "black" }}>
                    We've done a lot of research for which types of blog posts
                    work and which don't. Here are some of our most successful
                    blog post types:
                  </List>
                  <List>
                    <span style={{ color: "black" }}>Experiment/Analysis :</span>   Have you recently conducted a
                    groundbreaking technology experiment? Or perhaps you've
                    performed a study of your own or your customers' data that
                    has given amazing findings that the rest of the world should
                    be aware of? Write it up and send it over. These posts
                    should include definitive information, useful takeaways, and
                    detailed descriptions of each stage of the experiment or
                    analytic process.
                  </List>
                  <List>
                  <span style={{ color: "black" }}> Canonical : </span>  These posts provide readers with in-depth
                    tactical insights backed up with recent examples, original
                    quotes, original images, and current data.
                  </List>
                  <List>
                  <span style={{ color: "black" }}> Graphics :</span> These posts rely largely on the author's creation
                    of an infographic, data graph, or other visual aid.
                  </List>
                  <List>
                  <span style={{ color: "black" }}> How-to articles : </span>These posts act as a guide in everyday
                    work, providing technical explanations with illustrations
                    and examples to express complex instruction.
                  </List>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.Section4} variant="h6">
                  <b>The Bare Necessities For Every Post We Publish</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.Accordion1}>
                  <List style={{ color: "black" }}>
                    In everything we publish, we check for a few things as well:
                  </List>
                  <List>
                    Original ideas, strong arguments, and high-quality writing.
                    We will not republish anything that has been previously
                    published.
                  </List>
                  <List>
                    Articles must reflect the tone and writing style of the
                    Website Blog.
                  </List>
                  <List>
                    Data, quotations, and other content cited in the article
                    must all be properly attributed. Note that all data must
                    have been collected within the last two years.
                  </List>
                  <List>
                    In your piece, include links to at least 2-4 other Tekslate
                    blog posts.
                  </List>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.Section4} variant="h6">
                  <b>What We Won’t Accept?</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.Accordion1}>
                  <List style={{ color: "black" }}>
                    We can't abide some things:
                  </List>
                  <Typography className={classes.Accordion2}>
                    <List>
                      Anything that has already been discussed on our blog.
                      Before submitting your articles, please do a search of our
                      site.
                    </List>
                    <List>
                      Anything that could be interpreted as a link-building
                      strategy.
                    </List>
                    <List>
                      Anything that promotes your firm or group excessively.
                    </List>
                    <List>
                      Anything that is too critical of people or businesses –
                      this is not the platform to voice your grievances.
                    </List>
                  </Typography>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography className={classes.Section4} variant="h6">
                  <b> How To Submit A Guest Post?</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.Accordion1}>
                  <List>
                    Submit at least three blog topic ideas using the form on the
                    write for us page.
                  </List>
                  <List>
                    We'll let you know if we think your topic is something our
                    blog readers would be interested in.
                  </List>
                  <List>
                    You can submit your article in the form of a Google doc by
                    replying to the email once the topic has been approved.
                  </List>
                  <List>
                    By submitting your blog to Tekslate, you give us complete
                    editing rights. We’ll notify you once the article is live.
                  </List>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div>
          <div>
            <div className={classes.Section5}>
              <Typography className={classes.copyright} variant="h5">
                <b>Copyrights Violation</b>
                <hr className={classes.underline} />
              </Typography>
              <Typography className={classes.copyrightpoint}>
                <List>
                  <MinimizeIcon />
                  Once an article is accepted and published on our website
                  tekslate.com, we own the complete copyright to the content,
                  and the author cannot re-publish it online or offline.
                </List>
                <List>
                  <MinimizeIcon />
                  We value our writers in high regard and believe they are
                  knowledgeable in their fields. We want them to compose their
                  articles solely on the basis of their own experience and
                  knowledge. We strictly adhere to copyright rules and will not
                  accept any information that has been plagiarized from other
                  websites, books, or other copyright-protected sources.
                  
                </List>
              </Typography>
            </div>
          </div>
          {/* <div>karthik</div> */}
        </div>
      </Container>
      <ContactForm subject={'Corporate Enquiry'} />
      <FooterComponent />
    </div>
  );
}
