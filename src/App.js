import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Header from './components/header/Header';
import LeaveCalendar from './components/leave-calendar/LeaveCalendar';
import Layout from "./components/layout/layout";
import EmployeeList from './components/employee-list/EmployeeList';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      
      <Header/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/" element={<LeaveCalendar/>}></Route>
          <Route path="LeaveCalendar" element={<LeaveCalendar/>} />
          <Route path="EmployeeList" element={<EmployeeList/>} />
          </Route>
      </Routes>
    </BrowserRouter>

    </div>

  );
}
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
