import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Header from './components/header/Header';
import LeaveCalendar from './components/leave-calendar/LeaveCalendar';
import Layout from "./components/layout/layout";
import EmployeeList from './components/employee-list/EmployeeList';
import EmployeeDetail from "./components/employee-list/EmployeeDetail";
import GroupList from "./components/group-list/GroupList";
import AttributeList from "./components/atrribute-list/AttributeList";
import GroupEdit from "./components/group-list/GroupEdit";
import AttributeEdit from "./components/atrribute-list/AttributeEdit";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<LeaveCalendar/>} /> 
              <Route path="LeaveCalendar" element={<LeaveCalendar/>} />
              <Route path="EmployeeList" element={<EmployeeList/>} />
              <Route path="EmployeeDetail" element={<EmployeeDetail/>} />
              <Route path="GroupList" element={<GroupList/>} />
              <Route path="GroupList/GroupEdit" element={<GroupEdit/>} />
              <Route path="AttributeList" element={<AttributeList/>} />
              <Route path="AttributeList/AttributeEdit" element={<AttributeEdit/>} />
            </Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
