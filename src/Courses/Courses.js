// System imports
import React from "react";
import { useResource } from "react-request-hook";

// Components
import CourseList from './components/CourseList/CourseList'

// Styles
import './Courses.css';

function Courses({user = {}}) {
  const [courseList, getCourseList] = useResource(user => {
    return {
      url: `/jsonapi/v1/courses?email=${user.email}`,
      method: 'GET'
    }
  });

  // todo: add in pagination information
  React.useEffect(() => {
    getCourseList(user)
  }, [])

  return (
    <div>
      <div className="Courses_pagination">
        [placeholder for pagination]
      </div>
      <div className="Courses_courseList">
        {
          courseList.isLoading 
          ? <div>Loading courses.... </div>
          : <><CourseList courses={courseList.data} /></>
        }
      </div>
    </div>
  )
}

export default Courses;