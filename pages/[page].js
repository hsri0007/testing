import React from "react";
import { getData } from "../apiCalls";
import { static_course_paths } from "../path";

import MainPage from "../components/mainPage/mainPage";
import MainPageBlog from "../components/blogcomponentnew/blogcomponentnew";
import AllCoursesComponent from "../components/allcourses/AllCoursesCategoriesPage";

const Course = (props) => {
  console.log(props, "type");
  // console.log(props.trending.course_info.overview, "meta info");
  if (props.type === "course") {
    return (
      <div>
        <MainPage type="course" data={props.trending.course_info} />
      </div>
    );
  } else if (props.type === "articles") {
    return (
      <div>
        <MainPageBlog blogs={props?.trending?.course_info} />
      </div>
    );
  } else if (props.type === "top-level-cat") {
    return (
      <div>
        <AllCoursesComponent props={props} />
      </div>
    );
  }
};

export async function getServerSideProps(ctx) {
  try {
    const data = await getData(ctx.params.page);
    // console.log(props.trending.course_info, "type");
    // console.log(data.type);
    console.log(data, "data");
    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        trending: data ? data : [],
        type: data.type,
        url: ctx.params.page,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
  }
}

export default Course;
