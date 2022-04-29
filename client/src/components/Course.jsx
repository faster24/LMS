import { React, useState, useEffect } from "react";
import AuthServices from "../services/auth.services";
import swal from 'sweetalert';

import CourseServices from "../services/course.services";

function Course({ course }) {
  const [currentUserID, setCurrentUserID] = useState("");
 
  useEffect(() => {
    try {
      const user = AuthServices.getCurrentUser();

      if (user) {
        setCurrentUserID(user._id);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const courseID = course.id;
      await CourseServices.registerCourse(courseID, currentUserID).then(
        (res) => {
          console.log(res.data.status);

          if (res.data.status === 403) {
            swal("Sorry , Maximum registration has reached!");
          } else {
            swal({
              title: "Launch Link",
              text: `${res.data}`,
              icon: "success", 
              button: "OK"
            });
          }
        }
      );
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div class="col mb-5">
      <div class="card h-120">
        <img
          class="card-img-top"
          src={require("../asset/img/pexels-bulb.jpg")}
          alt="..."
          width="200"
          height="140"
        />

        <div class="card-body p-4">
          <h6 class="fs-6 fw-bold fst-italic">Course Title </h6>

          <p class="fs-6 fw-lighter">{course.title}</p>
        </div>

        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {currentUserID ? (
            <form onSubmit={handleSubmit}>
              <input type="hidden" id="userId" value={currentUserID} />
              <input type="hidden" id="courseID" value={course.id} />
              <button
                class="btn btn-dark btn-outline-light mt-auto"
                type="submit"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Enroll
              </button>
            </form>
          ) : (
            <p class="fs- fw-bold text-center">Please login to take course</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Course;
