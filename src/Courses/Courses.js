// System imports
import React from "react";
import { useResource } from "react-request-hook";

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
      <div>Hello from courses</div>
      <div>user email: {user.email}</div>
      <div className="Courses_pagination">
        [placeholder for pagination]
      </div>
      <div className="Courses_courseList">
        total courses: {courseList.isLoading ? 'loading....' : courseList.data.length}
      </div>
    </div>
  )
}

export default Courses;