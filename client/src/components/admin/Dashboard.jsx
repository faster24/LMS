import { React, useEffect} from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../asset/css/styles.css";

function Dashboard({isAdmin}) {

  const navigate = useNavigate();

  useEffect( () => {
    if( !isAdmin )
    {
      return navigate('/');
    }

    
  });
  
  return (
    <div class="sb-nav-fixed">
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link to='/' style={{ textDecoration: "none" , color: "blueviolet" }}>
        <p class="navbar-brand ps-3">
          MN
        </p>
        </Link>
        

        <button
          class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i class="fas fa-bars"></i>
        </button>
      </nav>

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            class="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div class="sb-sidenav-menu">
              <div class="nav">
                <div class="sb-sidenav-menu-heading">Core</div>
                <a class="nav-link">Dashboard</a>
              </div>
            </div>
          </nav>
        </div>

       
        <Courses />


        </div>
      </div>
  );
}

export default Dashboard;
