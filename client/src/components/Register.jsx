import React, { useState } from "react";
import AuthService from "../services/auth.services";
import NavBar from  "./NavBar";
import "../asset/css/auth.css";
import swal from 'sweetalert';

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(firstname, lastname, email, password).then(
        (response) => {
          // check for token and user already exists with 200
          swal({
            title: `${response.message}`,
            icon: "success"
          });

          console.log(response);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>

      <NavBar/>

      <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
              <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div class="text w-100">
                  <h2>Welcome to Sign Up</h2>
                  <p>Already have an account?</p>
                  <a href="/login" class="btn btn-white btn-outline-white">
                    Sign In
                  </a>
                </div>
              </div>
              <div class="login-wrap p-4 p-lg-5">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-4">Sign Up</h3>
                  </div>
                </div>
                <form onSubmit={handleSubmit} class="signin-form">
                  <div class="form-group mb-3">
                    <label class="label" for="firstname">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      id="firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="name">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      id="lastname"
                      onChange={(e) => setLastname(e.target.value)}
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="email">
                      email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="Comfirmpassword">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Comfirm Password"
                      id="comfirmPassword"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary submit px-3"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>

  );
}

export default Register;
