import React from "react";
import Banner from "../components/allBlogs/Banner";
import Blogs from "../components/allBlogs/Blogs";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Sidebar from "../components/allBlogs/sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { getAllBlogs } from "../apiCalls";
import MetaTags from "../components/Meta/CourseMetaTags";
import Pagination from "../components/pagination/Pagination";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "60px 0px",
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

const Blog = (props) => {
  const classes = useStyles();
  const [data, setData] = React.useState(props.newCourses3);
  const [allData, setAllData] = React.useState(props.blogs.final_obj.blogs);
  // console.log('************this is data*************: ', data);
  // const [categories, setCategories] = React.useState(props?.allCategories);
  // const [state, setState] = React.useState({});
  // const [courses, setCourses] = React.useState(props?.allCourses);
  const [blogType, setBlogType] = React.useState(3);
  const [totalPage, setTotalPage] = React.useState(
    Math.ceil(props.newCourses3.length / 10)
  );
  const [currPage, setCurrPage] = React.useState(1);

  const handleChange = (event) => {
    setState((prevState) => {
      if (!event.target.checked) {
        delete prevState[event.target.name];
        return { ...prevState };
      } else {
        return { ...prevState, [event.target.name]: event.target.checked };
      }
    });
  };

  return (
    <div>
      <MetaTags
        title="Technology & IT Blog | Free Resources - TekSlate"
        description="Browse technology tutorials, interview questions, tips and insights. Get access to our latest resources articles - TekSlate"
        imgUrl="https://tekslateassets.s3.amazonaws.com/images/logo.svg"
        cannonical="blog"
      />
      <Banner />
      <Container maxWidth="lg">
        <Grid className={classes.wrapper} container spacing={3}>
          <Grid className={classes.sidebar} item lg={3} md={3} sm={12} xs={12}>
            <Sidebar
              setCurrPage={setCurrPage}
              newCourses1={props.newCourses1}
              newCourses2={props.newCourses2}
              newCourses3={props.newCourses3}
              setBlogType={setBlogType}
              setData={setData}
              setTotalPage={setTotalPage}
            />
          </Grid>
          <Grid className={classes.main} item lg={9} md={9} sm={12} xs={12}>
            <Blogs data={data} blogType={blogType} currPage={currPage} />
          </Grid>
        </Grid>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <Pagination
            currPage={currPage}
            totalPage={totalPage}
            setCurrPage={setCurrPage}
          />
        </div>
        <button></button>
      </Container>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const blogs = await getAllBlogs({ offset: 0, limit: 500 });

    let newCourses3 = [];
    let newCourses2 = [];
    let newCourses1 = [];
    // for (var val of blogs.final_obj.blogs) {
    //   if (val.blog_type === 3) newCourses3.push(val);
    //   if (val.blog_type === 2) newCourses2.push(val);
    //   if (val.blog_type === 1) newCourses1.push(val);
    // }

    blogs.final_obj.blogs.map((res) => {
      if (res.blog_type === 3) newCourses3.push(res);
      if (res.blog_type === 2) newCourses2.push(res);
      if (res.blog_type === 1) newCourses1.push(res);
    });

    return {
      props: {
        blogs,
        newCourses3,
        newCourses2,
        newCourses1,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
  }
}

export default Blog;
