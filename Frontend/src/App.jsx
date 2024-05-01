import { Routes, Route } from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from "../src/pages/Login";
import Addstory from '../src/pages/Addstory';
import Bookmark from "./pages/Bookmark";
import axios from "axios";
import {Toaster} from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <>
      <Navbar/>
      <Toaster position="top-center" toastOptions={{duration:2000}}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/addstory" element={<Addstory/>}></Route>
        <Route path="/bookmark" element={<Bookmark/>}></Route>
      </Routes>
    </>
  )
}

export default App
