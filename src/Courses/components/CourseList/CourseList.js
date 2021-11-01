// System imports
import React from "react";

// Components
import CourseItem from '../CourseItem/CourseItem'

// Styles
import './CourseList.css';

function CourseList({courses = []}) {
  return (
    <div className="CourseList">
      <span>total courses: {courses.length}</span>
      <ul className="CourseList__list">
        {
          courses.map(course => {
            return (
              <li className="CourseList__listItem" key={course.id}>
                <CourseItem course={course} />
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default CourseList;