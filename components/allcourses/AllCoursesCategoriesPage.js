import React from "react";
import { useRouter } from 'next/router'
import Banner from "./Banner";
import Courses from "./Courses";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Sidebar from "./sidebar";
import { makeStyles } from "@material-ui/core/styles";
import {
    getAllCourses,
    getAllCategories,
    getAllCourseOffers,
    getAllTopLevelCategories
} from "../../apiCalls";
import MetaTags from "../Meta/CourseMetaTags";
import Pagination from "../pagination/Pagination";

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

const AllCoursesComponent = ({ props }) => {
    const classes = useStyles();
    const router = useRouter();
    // console.log('*********this is props*********: ', props);
    const [categories, setCategories] = React.useState(props?.trending?.categories);
    const [state, setState] = React.useState(1);
    const [courses, setCourses] = React.useState(props?.trending?.course_info);
    const [allCourses, setAllCourses] = React.useState(props?.trending?.course_info);
    const [searchTrue, setSearchTrue] = React.useState(false);
    const [totalPage, setTotalPage] = React.useState(Math.ceil(props?.trending?.course_info.length / 10));
    const [currPage, setCurrPage] = React.useState(1);

    const url_data = categories.find((c) => c.slug === props.url);
    // console.log(url_data, 'url_data')

    const handleChange = async (event, data, slug) => {
        // console.log(data, state, 'before')
        // if (event.target.checked) {
        // window.location.href = `#${slug}`;
        setState(data);
        var newCourses = [];
        for (var val of allCourses) {
            if (data === val.category) newCourses.push(val);
        }
        setTotalPage(Math.ceil(newCourses.length / 10));
        setCourses(newCourses);

        // console.log(data, state, 'after')
    };



    return (
        <div>
            <MetaTags
                title={url_data?.meta_title}
                description={url_data?.meta_desc}
                imgUrl='https://tekslateassets.s3.amazonaws.com/images/logo.svg' cannonical={url_data?.slug} />
            <Banner cat_page={true} url_data={url_data} />
            <Container maxWidth="lg">
                <Grid className={classes.wrapper} container spacing={3}>
                    <Grid className={classes.sidebar} item lg={3} md={3} sm={12} xs={12}>
                        <Sidebar
                            categories={categories}
                            state={state}
                            handleChange={handleChange}
                            cat_page={true}
                            url={props.url}
                            url_data={url_data}
                        />
                    </Grid>
                    <Grid className={classes.main} item lg={9} md={9} sm={12} xs={12}>
                        <Courses
                            state={state}
                            courses={courses}
                            course_offers={props?.courseOffers}
                            searchTrue={searchTrue}
                            currPage={currPage}
                        />
                    </Grid>
                </Grid>
                <div style={{ display: "flex", marginTop: "50px" }}>
                    <Pagination totalPage={totalPage} setCurrPage={setCurrPage} />
                </div>
                <button></button>
            </Container>
        </div>
    );
};

export default AllCoursesComponent;