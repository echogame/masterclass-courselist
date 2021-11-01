// System imports
import React from "react";

// Styles
import './CourseItem.css';

function CourseItem({course = {}}) {
  function favoriteClasses() {
    return course.favorite 
      ? 'CourseItem__favorite CourseItem__favorite__fave'
      : 'CourseItem__favorite'
  }

  function toggleFavorite(courseId) {
    console.log('toggle fave', courseId)
  }

  return (
    <div className="CourseItem" key={course.id}>
      <div className="CourseItem__thumbnail"><img src={course.instructor_image_url} /></div>
      <div className="CourseItem__instructor">{course.instructor_name}</div>
      <div className="CourseItem__title">{course.title}</div>
      <div className={favoriteClasses()}>
        <button onClick={() => toggleFavorite(course.id)}>&hearts;</button>
      </div>

    </div>
  )
}

export default CourseItem;