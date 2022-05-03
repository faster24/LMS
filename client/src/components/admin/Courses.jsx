import { React, useState } from "react";
import courseServices from "../../services/course.services";
import swal from "sweetalert";

function Courses() {
  const [courseId, setCourseId] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await courseServices.createCourse(courseId, file).then((response) => {
        swal({
          title: `${response.data.message}`,
          icon: "success"
        });
      });
    } catch (error) {
      swal({
        title: 'Sorry, Something went wrong!',
        icon: "warning"
      });
    }
  };

  return (
    <div id="layoutSidenav_content">
      <main>
        <div class="container-fluid ">

          <div class="card mb-4 p-3 mt-4">
            <div class="col-lg-12">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                  <p class="fw-bold fs-5 my-4">Import a Course</p>
                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <p className="fw-bold">Course ID ( must be unique for each course )</p>
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="courseId"
                        type="text"
                        placeholder="Eg. A-20134"
                        onChange={(e) => setCourseId(e.target.value)}
                      />
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        class="form-control-file"
                        id="file"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>

                    <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button class="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Courses;
