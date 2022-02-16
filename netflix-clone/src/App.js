import * as React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';
import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
// import Home from './components/Home/Home'
// import Fav from './components/favPage/FavPage';
// import  Navbar  from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <h1>kkk</h1>
       {/* <Navbar/> */}
      <Routes>
     
          <Route path='/' exact  element={<Home/>} />
          {/* <Route path='/favorite' exact element={<Fav/>} /> */}
      
      </Routes>
    </div>
  );
}





export default App;