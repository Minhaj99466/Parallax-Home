import {  Routes, Route } from "react-router-dom";
import Example from "../Components/Button";
import Hello from "../Pages/Home/Hello";
import New from "../Pages/New";
import Rocket from "../Pages/Rocket";


function UserRoute() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Example/>} />
            <Route path='/hello' element={<Hello/>} />
            <Route path='/new' element={<New/>} />
            <Route path='/rocket' element={<Rocket/>} />
        </Routes>
    </>
  )
}

export default UserRoute
