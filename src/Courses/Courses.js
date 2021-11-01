// System imports
import React from "react";

// Styles
import './Courses.css';

function Courses({user = {}}) {
  return (
    <div>
      <div>Hello from courses</div>
      <div>user email: {user.email}</div>
    </div>
  )
}

export default Courses;