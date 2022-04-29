import React from 'react'
import NavBar from './NavBar';
import Header from './Header';
import Courses from './Courses';

function Home() {
  return (
    <div style={{backgroundColor:"2F2FA2"}}>
        <NavBar />
        <Header />
        <Courses />

        <footer class="py-5" style={{background: "linear-gradient(90deg, rgba(15,32,39,1) 0%, rgba(32,57,65,1) 33%)"}}>
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; MK website 2022
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home