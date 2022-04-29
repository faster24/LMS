import { React, useState, useEffect } from "react";
import CourseServices from "../services/course.services";
import Course from "./Course";
function Courses() {
  const [courses, setCourses] = useState({});

  useEffect(() => {
    try {
      const data = CourseServices.getAllCourses().then((response) => {
        setCourses(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {!courses.length ? (
              <div class="px-4 px-lg-5 mt-5" style={{ height: "26vh" }}>
                <div class="d-flex justify-content-center text-center">
                  <div
                    class="spinner-grow text-info spinner-grow-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div
                    class="spinner-grow text-secondary spinner-grow-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div
                    class="spinner-grow text-warning spinner-grow-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <div
                    class="spinner-grow text-primary spinner-grow-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            ) : (
              courses.map((course) => (
                <div key={course.id}>
                  <Course course={course} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
