import React, { useEffect, useState } from 'react'
import LoginForm from '../../sidebar/src/LoginForm/LoginForm'
import Contact from './contact/Contact'
import Home from './home/Home'
import Side from './side/Side'
import Student from './student/Student'
import Toolbar from './toolbar/Toolbar'
import axios from "axios"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";
import Faculty from './faculty/Faculty'


export default function App() {

  const adminUser = {
    email: "admin@gmail.com",
    password: "qwerty1234"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else {
      setError("Invalid Username or Password!");
    }
  }

  const [sidebar, setSidebar] = useState(false);
  const [student, setStudent] = useState([]);

  useEffect(()=>{
    const fetchStudent = async ()=>{
      const res = await axios.get("/user/")
      setStudent(res.data)
    }
    fetchStudent() 
  })

  const togglesidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
    <div>
      {(user.email !== "") ? (
        <>
        <Router>
          <Toolbar openSidebar={togglesidebar} />
          <Side sidebar={sidebar} />
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/student" element={<Student student={student}/>} />
          <Route exact path="/faculty" element={<Faculty />} />
          <Route exact path="/contact" element={<Contact />} />
          </Routes>
          </Router>
        </>
      ) : (
        <div className="App">
          <LoginForm Login={Login} error={error} />
        </div>
      )}
      </div>
  )
}