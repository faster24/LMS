import { React, useState, useEffect } from "react";
import CourseServices from "../services/course.services";
import Course from "./Course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Courses() {
  const [courses, setCourses] = useState({});
  const [page, setPage] = useState("");

  useEffect(() => {
    try {
      const data = CourseServices.getAllCourses(null).then((response) => {
        setCourses(response.data);

        const page = response.page;

        if (page) setPage(page);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleNextPages = async (e) => {
    e.preventDefault();

    try {
      const data = CourseServices.getAllCourses(page).then((response) => {
        setCourses(response.data);
        setPage(response.page);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInitialPage = async (e) => {
    e.preventDefault();

    try {
      const data = CourseServices.getAllCourses(null).then((response) => {
        setCourses(response.data);
        setPage(response.page);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="container mt-2 py-3">
        <div class="row w-auto gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {!courses.length ? (
            <div class="px-4 px-lg-5 mt-5" style={{ height: "20vh" }}>
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

        <ul class="pagination justify-content-between">
          <li class="page-item">
            <button class="page-link" onClick={handleInitialPage}>
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>
          </li>

         { page && (
           <li class="page-item">
           <button class="page-link" onClick={handleNextPages}>
             <FontAwesomeIcon icon={faAngleRight} />
           </button>
         </li>
         )}
        </ul>
      </div>
    </div>
  );
}

export default Courses;
