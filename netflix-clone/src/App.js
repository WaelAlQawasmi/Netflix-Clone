import * as React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';
import Navbar2 from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
// import Home from './components/Home/Home'
import FavList from "./components/FavList/FavList";
// import  Navbar  from './components/navbar/Navbar';

function App() {
  return (
    <div>
    
       <Navbar2/>
      <Routes>
     
          <Route path='/' exact  element={<Home/>} />
           <Route path='/favorite' exact element={<FavList/>} /> 
      
      </Routes>
    </div>
  );
}





export default App;