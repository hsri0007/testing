import React from "react";
import Banner from "../components/searchPage/Banner";
import Courses from "../components/searchPage/Courses";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Sidebar from "../components/searchPage/sidebar";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {
  getAllCourses,
  getAllCategories,
  getAllCourseOffers,
  getAllBlogs
} from "../apiCalls";
import MetaTags from "../components/Meta/CourseMetaTags";
import Pagination from "../components/pagination/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  maintext: {
    color: "#3e3d3d",
    fontSize: "34px",
    fontWeight: "500",
    margin: "auto",
    padding: "0px 0px 15px 0px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },

  type: {
    textAlign: "center",
    fontSize: "14px",
    color: "#1358db",
  },

  date: {
    textAlign: "center",
    fontSize: "14px",
  },

  bannerbg: {
    backgroundImage: `url("https://tekslateassets.s3.amazonaws.com/images/design_bg.svg")`,
    background: "#101d42",
    display: "flex",
    alignItems: "center",
  },

  banner_main: {
    margin: "auto",
    background: "white",
    marginBottom: "-52px",
    marginTop: "52px",
    // border: "1px solid grey",
    boxShadow: "0 0 0 1px #e7e7e7, 0 2px 4px 0 rgb(0 0 0 / 10%)",
    padding: "30px 50px",
  },
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

const SearchPage = (props) => {
  const classes = useStyles();
  // console.log('*********this is props*********: ', props);
  const [categories, setCategories] = React.useState([{ id: 0, name: 'Courses' }, { id: 1, name: 'Blogs' }]);
  const [state, setState] = React.useState([]);
  const [itemChecked, setItemChecked] = React.useState([false, false]);
  const [courses, setCourses] = React.useState(props?.allCourses.final_obj.concat(props?.blogs.final_obj.blogs));
  const [allCourses, setAllCourses] = React.useState(props?.allCourses.final_obj);
  const [searchTrue, setSearchTrue] = React.useState(false);
  const [totalPage, setTotalPage] = React.useState(Math.ceil(props?.allCourses.final_obj.length / 10));
  const [currPage, setCurrPage] = React.useState(1);
  const [allBlogs, setAllBlogs] = React.useState(props?.blogs.final_obj.blogs);

  const handleChange = async (event, data) => {
    // console.log(data,event,'test data')
    if (event.target.checked) {
      setItemChecked(prev => {
        prev[data] = true;
        if (prev[0] === true && prev[1] === true) {
          setCourses(allCourses.concat(allBlogs));
          setTotalPage(Math.ceil((allCourses.length + allBlogs.length) / 10));
        }
        else if (prev[0] === true) {
          setCourses(allCourses);
          setTotalPage(Math.ceil(allCourses.length / 10));
        }
        else if (prev[1] === true) {
          setCourses(allBlogs);
          setTotalPage(Math.ceil(allBlogs.length / 10));
        }
        else {
          setCourses(allCourses.concat(allBlogs));
          setTotalPage(Math.ceil((allCourses.length + allBlogs.length) / 10));
        }
        return prev;
      });

    } else {
      setItemChecked(prev => {
        prev[data] = false;
        if (prev[0] === true && prev[1] === true) {
          setCourses(allCourses.concat(allBlogs));
          setTotalPage(Math.ceil((allCourses.length + allBlogs.length) / 10));
        }
        else if (prev[0] === true) {
          setCourses(allCourses);
          setTotalPage(Math.ceil(allCourses.length / 10));
        }
        else if (prev[1] === true) {
          setCourses(allBlogs);
          setTotalPage(Math.ceil(allBlogs.length / 10));
        }
        else {
          setCourses(allCourses.concat(allBlogs));
          setTotalPage(Math.ceil((allCourses.length + allBlogs.length) / 10));
        }
        return prev;
      });
    }
    setCurrPage(1);
  };

  return (
    <div>
      <MetaTags
        title='Search TekSlate Online Courses And Blogs'
        description="Find TekSlate Courses & Blogs. World's leading certification training providers helps to get ahead in IT field like Hadoop, Salesforce , BI Tools, Informatica and more 450+ courses"
        imgUrl='https://tekslateassets.s3.amazonaws.com/images/logo.svg' cannonical='search' />
      <div>
        <section className={classes.bannerbg}>
          <Container className={classes.banner_main} maxWidth="md">
            <p className={classes.type}>Home / Search</p>
            {props.search_string && courses.length !== 1 && props.search_string !== '' && <h1 className={classes.maintext}>
              {courses.length} Results found for '{props.search_string}'
            </h1>}
            {props.search_string && courses.length === 1 && props.search_string !== '' && <h2 className={classes.maintext}>
              {courses.length} Result found for '{props.search_string}'
            </h2>}
            {(props.search_string === '' || !props.search_string) && <h2 className={classes.maintext}>
              {courses.length} Result found
            </h2>}
          </Container>
        </section>
      </div>
      <Container maxWidth="lg">
        <Grid className={classes.wrapper} container spacing={3}>
          <Grid className={classes.sidebar} item lg={3} md={3} sm={12} xs={12}>
            <Sidebar
              categories={categories}
              state={state}
              handleChange={handleChange}
              search={true}
            />
          </Grid>
          <Grid className={classes.main} item lg={9} md={9} sm={12} xs={12}>
            <Courses
              state={state}
              courses={courses}
              course_offers={props.courseOffers}
              searchTrue={searchTrue}
              currPage={currPage}
            />
          </Grid>
        </Grid>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <Pagination totalPage={totalPage} setCurrPage={setCurrPage} currPage={currPage} />
        </div>
        <button></button>
      </Container>
    </div>
  );
};


SearchPage.getInitialProps = async ({ query }) => {
  // console.log('********This is query*********: ', query);
  const details = {
    search_string: query.search_string,
    // limit: 10,
    offset: 0,
  };
  const allCourses = await getAllCourses(details);
  const allCourseOffers = await getAllCourseOffers();
  const blogs = await getAllBlogs(details);

  var courseOffers = {};
  for (let val of allCourseOffers) {
    courseOffers[val.course_id] = {
      actual_price: val.actual_price,
      selling_price: val.selling_price,
      actual_price_usd: val.actual_price_usd,
      selling_price_usd: val.selling_price_usd,
      actual_price_self_paced: val.actual_price_self_paced,
      selling_price_self_paced: val.selling_price_self_paced,
      actual_price_usd_self_paced: val.actual_price_usd_self_paced,
      selling_price_usd_self_paced: val.selling_price_usd_self_paced
    };
  }

  return {
    allCourses,
    courseOffers,
    blogs,
    search_string: query.search_string
  };
}

export default SearchPage;
