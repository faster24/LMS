import axios from "axios";

const API_URL = "https://lms-api-io.herokuapp.com/api/v1/course";

const createCourse = (courseId, file) => {
  const data = new FormData();
  data.append("courseFile", file);
  data.append("courseId", courseId);

    axios({
    method: "post",
    url: API_URL + "/create",
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  })
  .then( (res) => res.json() );
};

const getAllCourses = () => {
  return axios.get(API_URL + "/all").then((response) => response.data);
};

const registerCourse = ( courseId, learnerId) => {
  return axios
    .post( API_URL + "/register", { courseId, learnerId })

};


const courseServices = {
  createCourse,
  getAllCourses,
  registerCourse,
};

export default courseServices;
