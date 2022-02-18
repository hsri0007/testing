import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    marginLeft: 10,
    marginRight: 10,
    boxShadow: "none",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 1700px)": {
      maxWidth: 405,
      minHeight: 200,
    },
    "@media (max-width: 600px)": {
      maxWidth: 350,
      minHeight: 200,
    },
  },

  linkedin: {
    fontSize: "40px",
    position: "absolute",
    top: "0",
    color: "#115293",
  },

  media: {
    height: 150,
    width: 288,
    marginBottom: "28px",
    width: "100%",
    borderRadius: "12px",
    margin: "auto",
  },
  firstPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    // border: '1px solid red',
    // marginBottom: "20px",
    padding: "60px 15px",
  },
  title: {
    fontSize: "32px",
    textAlign: "center",
  },
  line: {
    border: "none",
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 30px auto",
  },

  line2: {
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 20px auto",
  },

  name: {
    textAlign: "center",
    fontSize: "18px",
    margin: "0px 0px 10px 0px",
    fontWeight: "600",
    color: "#404040",
  },
  line: {
    border: "none",
    borderTop: "4px solid #ffcf00",
    width: "10%",
    margin: "0px auto 30px auto",
  },

  card: {
    margin: "20px 30px",
    padding: "20px",
    boxShadow: "0px 0px 1.42rem 0px rgb(0 0 0 / 19%)",
  },

  designation: {
    textAlign: "center",
    margin: "0px 0px 10px 0px",
    fontSize: "16px",
    color: "#4a4a4a",
  },

  testimonial: {
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
    fontWeight: "400",
    color: "#5a5a5a",
    textAlign: "center",
  },

  quoteIcon: {
    position: "absolute",
    fontSize: "100px",
    marginTop: "-30px",
    marginLeft: "-30px",
    color: "#f3f4f6",
    zIndex: "1",
  },

  text: {
    minHeight: "120px",
    marginTop: "20px",
  },
  cardActions: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    textTransform: "inherit",
    border: "1px solid #2e3191",
    borderRadius: "3px",
    backgroundColor: "#2e3191",
    padding: "8px 30px",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",
    color: "#fff",
    marginTop: "50px",
    "&:hover": {
      borderColor: "#003fc2",
      backgroundColor: "#003fc2",
    },
  },

  btnArrow: {
    fontSize: "16px",
    marginLeft: "10px",
  },

  profileImg: {
    display: "block",
    margin: "auto",
  },

  slickArrow: {
    "&:hover": {
      backgroundColor: "primary",
    },
  },
  container: {
    maxWidth: "1700px",
    "@media (max-width: 1700px)": {
      maxWidth: "1200px",
    },
    "@media (max-width: 600px)": {
      maxWidth: "320px",
    },
  },
});

function testimonials({ data }) {
  const classes = useStyles();

  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: data.reviews.length,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: (i) => {
      return (
        <div>
          <h2>{i}</h2>
        </div>
      );
    },

    nextArrow: (
      <ArrowForwardIosIcon
        color="primary"
        fontSize="medium"
        className="slickArrow"
        focusable={true}
      />
    ),
    prevArrow: (
      <ArrowBackIosIcon
        color="primary"
        fontSize="medium"
        className="slickArrow"
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data.reviews.length,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className={classes.firstPage}>
      <Container className={classes.container}>
        <div>
          <h2 className={classes.title}>{data?.course_headings?.reviews}</h2>
          <div className={classes.line} />
        </div>
        <div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
             
             {
                                    "@context":"http://schema.org",
                                    "@type": "Review",
                                    "name" : "${data.overview.course}",
                                    "url"  : "https://mindmajix.com/${
                                      data.overview.url_title
                                    }",
                                    "image" : "${data.overview.image}",
                                    "author" : {
                                      "@type": "Person",
                                      "name": "${data?.reviews[0]?.name}"
                                    },
                                    "reviewBody" : "${data.reviews[0]?.description.replace(
                                      /<[^>]+>/g,
                                      ""
                                    )}",
                                    "reviewRating" : {
                                        "@type": "Rating",
                                        "ratingValue" : "5"
                                    },
                                    "itemReviewed" : {
                                        "@type": "LocalBusiness",
                                        "name":"${data.overview.course}",
                                        "priceRange": "USD 0.00",
                                        "image" : "${data.overview.image}",
                                        "address": {
                                            "@type": "PostalAddress",
                                            "streetAddress": "",
                                            "addressLocality": ["Hyderabad","Bangalore","New York","Texas"],
                                            "addressRegion": ["Telangana","Karnataka","New York","Texas"],
                                            "postalCode": ["500049","560038","10001","75024"],
                                            "telephone": ["+91-90529-43388"],
                                            "addressCountry": {
                                                "@type": "Country",
                                                "name": ["India","India","United States","United States"]                    
                                            }
                                        }
                                    }
                                }
             
             `,
            }}
          />
        </div>
        <div>
          <Slider {...settings}>
            {data.reviews.map((val) => {
              return (
                <div>
                  <div className={classes.card}>
                    {val.linkedin_profile && (
                      <a href={val.linkedin_profile}>
                        <LinkedInIcon className={classes.linkedin} />
                      </a>
                    )}
                    <div className={classes.testimonial}>
                      {val.image ? (
                        <img
                          className={classes.profileImg}
                          style={{ width: "120px", height: "120px" }}
                          src={val.image}
                          loading="lazy"
                          alt="tekslate-reviews"
                        />
                      ) : (
                        <img
                          className={classes.profileImg}
                          style={{ width: "120px", height: "120px" }}
                          src="https://tekslateassets.s3.amazonaws.com/images/profile.svg"
                          loading="lazy"
                          alt="tekslate-reviews"
                        />
                      )}
                      <div>
                        {/* <FormatQuoteIcon className={classes.quoteIcon} /> */}
                        <div
                          className={classes.text}
                          dangerouslySetInnerHTML={{ __html: val.description }}
                        />
                        {/* <p className={classes.text}>
                      My experience at tekslate really impacted my career. It
                      put me in a position to get the job I have today.
                    </p> */}
                      </div>
                    </div>
                    <div className={classes.line2} />
                    <p className={classes.name}>{val.name}</p>
                    {val.designation && (
                      <p className={classes.designation}>{val.designation}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default testimonials;
