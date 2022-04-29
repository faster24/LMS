import axios from "axios";

const API_URL = "https://lms-api-io.herokuapp.com/api/v1/auth";

const register = ( firstname, lastname, email, password ) => {
  return axios
    .post(API_URL + "/register", {
      firstname,
      lastname,  
      email,
      password,
    })
    .then((response) => {

      return response.data;
      
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {

  localStorage.removeItem("user");

  return axios.put(API_URL + "/logout")
  .then( response => {
    console.log(response.data);
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;