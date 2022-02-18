import CourseMetaTag from '../coursePage/CourseMetaTags';
import RelatedCourses from "../coursePage/RelatedCourses/RelatedCourses";
import CourseForm from "../coursePage/CourseForm/courseForm";
import CoursePage from "../coursePage/coursePage";
import CourseSecondPage from "../coursePage/courseSecondPage";
// import FooterComponent from "../footerComponent/footerComponent";
import BlogPage from "../blogPage/Banner";
import DynamicCourses from '../coursePage/DynamicCourses/DynamicCourses';

const Course = ({ type, data }) => {
  // console.log(data, 'Top_level_cat_title')
  return (
    <>
      {type === "course" ? (
        <div>
          <CourseMetaTag data={data} />
          <CoursePage data={data} />
          <CourseSecondPage data={data} />
          <CourseForm data={data} subject={`${data.overview.course.replace(' Training', '')} Free Demo`} />
          {data?.related_courses && data.related_courses?.length > 0 && <RelatedCourses data={data} />}
          {data?.top_level_courses && data?.top_level_courses?.length > 0 && <DynamicCourses data={data} title={data?.Top_level_cat_title} />}
          {/* {data.related_courses.length > 0 && <RelatedCourses data={data} />} */}
        </div>
      ) : (
        <div>
          <BlogPage />
        </div>
      )}
    </>
  );
};

export default Course;
