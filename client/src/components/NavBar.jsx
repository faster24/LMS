import { React, useState, useEffect } from "react";
import AuthService from "../services/auth.services";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NavBar() {
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand text-primary" href="#">
          MK
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <div></div>
          </ul>

          <form class="d-flex p-2">
            {currentUser._id ? (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 mx-sm-auto">
                {currentUser.isAdmin ? (
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <li class="nav-item p-lg-2 text-center">
                      <a class="nav-link active" aria-current="page" href="#!">
                        Dashboard
                      </a>
                    </li>
                  </Link>
                ) : (
                  <div></div>
                )}
                <li class="nav-item p-lg-2 text-center">
                  <Link to="/logout" style={{ textDecoration: "none" }}>
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="#!"
                      onClick={logOut}
                    >
                      Logout
                    </a>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 mx-sm-auto">
                <li class="nav-item p-lg-2 text-center">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <a class="nav-link active" aria-current="page" href="#!">
                      Log in
                    </a>
                  </Link>
                </li>

                <li class="nav-item p-lg-2 text-center">
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <a class="nav-link active" aria-current="page" href="#!">
                      Sign Up
                    </a>
                  </Link>
                </li>
              </ul>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
