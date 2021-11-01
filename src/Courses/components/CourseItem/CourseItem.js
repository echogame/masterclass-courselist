// System imports
import React from "react";
import { useResource } from "react-request-hook";

// Styles
import './CourseItem.css';

function CourseItem({course = {}}) {
  // TODO: get this from context
  const user = { email: 'yinneh@gmail.com' };

  const [addFavorite, setAddFavorite] =  useResource((email, courseId) => {
    return {
      url: '/jsonapi/v1/favorite',
      method: 'POST',
      data: {
        email,
        course_id: courseId
      }
    }
  });

  const [removeFavorite, setRemoveFavorite] = useResource((email, courseId) => {
    return {
      url: '/jsonapi/v1/favorite',
      method: 'DELETE',
      data: {
        email,
        course_id: courseId
      }
    }
  });

  function favoriteClasses() {
    return course.favorite 
      ? 'CourseItem__favorite__fave'
      : 'CourseItem__favorite__notfave'
  }

  function favoriteIsLoading() {
    return addFavorite.isLoading || removeFavorite.isLoading;
  }

  function toggleFavorite() {
    if (course.favorite) {
      setRemoveFavorite(user.email, course.id);
      course.favorite = false;
    } else {
      setAddFavorite(user.email, course.id)
      course.favorite = true;
    }
  }

  return (
    <div className="CourseItem" key={course.id}>
      <div className="CourseItem__thumbnail"><img src={course.instructor_image_url} /></div>
      <div className="CourseItem__instructor">{course.instructor_name}</div>
      <div className="CourseItem__title">{course.title}</div>
      <div className="CourseItem__favorite">
        <button 
          disabled={favoriteIsLoading()} 
          onClick={() => toggleFavorite()}
          className={favoriteClasses()}>&hearts;</button>
      </div>

    </div>
  )
}

export default CourseItem;