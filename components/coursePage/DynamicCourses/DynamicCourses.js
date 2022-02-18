import React, { useState } from "react";
import CarouselComponent from "../../CarouselComponent/Carousel";
import Container from "@material-ui/core/Container";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";

const DynamicCourses = ({ data, title }) => {
    const related_courses = data.top_level_courses.map((val) => {
        return {
            slug: val.course_slug,
            name: val.course_title,
            duration: 15,
            imgUri: 'https://newtekslateassets.s3.us-west-2.amazonaws.com/wp-content/uploads/2015/02/ansible-training.png',
            designation: "AWS",
            trending: true,
            description:
                "I have got trained for AWS from UnitedSkill. I am happy with the training and the trainer. Explanatory sessions with practical hands-on labs helped me gain industrial experience in the virtual classroom itself. I would recommend UnitedSkill.",
            rating: 4.2,
        };
    });
    const [reviews, setState] = useState(related_courses);
    // console.log(reviews, 'total courses')

    return (
        <div style={{ margin: "0 0 5rem 0" }}>
            <Container>
                <div style={{ textAlign: "center" }}>
                    <HeadingsComponent first={title} last="" />
                </div>
                <div>
                    <CarouselComponent reviews={reviews} />
                </div>
            </Container>
        </div>
    );
};

export default DynamicCourses;
