import React from "react";
import { useRouter } from "next/router";
import Banner from "../components/allcourses/Banner";
import Courses from "../components/allcourses/AllCoursePage";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Sidebar from "../components/allcourses/sidebar";
import { makeStyles } from "@material-ui/core/styles";
import {
  getAllCourses,
  getAllCategories,
  getAllCourseOffers,
  getAllTopLevelCategories,
} from "../apiCalls";
import MetaTags from "../components/Meta/CourseMetaTags";
// import Pagination from "../components/pagination/Pagination";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "120px 0px 60px 0px",
  },
  main: {
    // "width": "60%",
    // "height": "150vh"
  },
  sidebar: {
    height: "600px",
    backgroundImage: `url("https://tekslateassets.s3.amazonaws.com/images/doodle.svg")`,
    backgroundSize: "cover",
    boxShadow: "0 0 0 1px #e7e7e7, 0 2px 4px 0 rgb(0 0 0 / 10%)",
    backgroundRepeat: "no-repeat",
    // border: "1px solid #1358db",
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    overflow: "auto",
    padding: "12px 24px !important",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sidebar2: {
    top: "0",
    height: "600px",
    overflow: "auto",
    position: "fixed",
    width: "100%",
    zIndex: "1000",
    background: "white",
  },
}));

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const Course = (props) => {
  const classes = useStyles();
  const router = useRouter();
  // console.log('*********this is props*********: ', props);
  const [categories, setCategories] = React.useState(
    props?.allCourses?.categories
  );
  const [state, setState] = React.useState(1);
  const [courses, setCourses] = React.useState(props?.allCourses?.final_obj);
  // const [allCourses, setAllCourses] = React.useState(props?.allCourses?.final_obj);
  const [searchTrue, setSearchTrue] = React.useState(false);
  const [totalPage, setTotalPage] = React.useState(
    Math.floor(props.allCourses?.count / 10)
  );
  const [currPage, setCurrPage] = React.useState(1);
  const [isLoading, setisLoading] = React.useState(false);

  const paginationChange = async (e, value) => {
    setCurrPage(value);
    setisLoading(true);
    try {
      const details = {
        limit: 10,
        offset: value * 10,
      };
      const data = await getAllCourses(details);
      if (data?.success === true) {
        setCourses(data.final_obj);
      }
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };
  const handleChange = async (event, data, slug) => {
    // console.log(data, state, 'before')
    // console.log(data, state, 'after');
    // if (event.target.checked) {
    window.location.open = `${slug}`;
  };

  return (
    <div>
      <MetaTags
        title="Best Online Certification Courses | Get Trained & Certified - TekSlate"
        description="Find the Top 100+ Popular IT Courses . ✔️Live Classes ✔️Self-Paced Videos ✔️Corporate Training ➔ Learn from Industry Trainers. Enroll now!"
        imgUrl="https://tekslateassets.s3.amazonaws.com/images/logo.svg"
        cannonical="all-course"
      />
      <Banner setCourses={setCourses} setSearchTrue={setSearchTrue} />
      <Container maxWidth="lg">
        <Grid className={classes.wrapper} container spacing={3}>
          <Grid className={classes.sidebar} item lg={3} md={3} sm={12} xs={12}>
            <Sidebar
              categories={categories}
              state={state}
              handleChange={handleChange}
              cat_page={false}
            />
          </Grid>
          <Grid className={classes.main} item lg={9} md={9} sm={12} xs={12}>
            {isLoading ? (
              <p>loading..</p>
            ) : (
              <Courses
                state={state}
                courses={courses}
                course_offers={props.courseOffers}
                searchTrue={searchTrue}
                currPage={currPage}
                isLoading={isLoading}
              />
            )}
          </Grid>
        </Grid>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <div style={{ margin: "auto" }} className={classes.root}>
            <Pagination
              count={totalPage}
              page={currPage}
              onChange={paginationChange}
              variant="outlined"
              color="primary"
            />
          </div>
          {/* <Pagination totalPage={totalPage} setCurrPage={setCurrPage} onChange={paginationChange} /> */}
        </div>
        <button></button>
      </Container>
    </div>
  );
};

// export async function getStaticProps() {
//   const details = {
//     search_string: "",
//     // limit: 10,
//     offset: 0,
//   };
//   const allCourses = await getAllCourses(details);
//   const allCategories = await getAllCategories();
//   const allCourseOffers = await getAllCourseOffers();

export async function getServerSideProps() {
  const details = {
    // search_string: "",
    limit: 10,
    offset: 0,
  };
  const allCourses = await getAllCourses(details);
  // const allCategories = await getAllTopLevelCategories({});
  // const allCourseOffers = await getAllCourseOffers();

  return {
    props: {
      allCourses,
      // allCategories,
      // courseOffers
    }, // will be passed to the page component as props
  };
}

export default Course;
