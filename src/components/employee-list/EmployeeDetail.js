import React from "react";
import "./EmployeeDetail.css";
import '@fontsource/roboto/700.css';
import female from './female.jpg'; 
import Image from "react-bootstrap/Image";




export default class EmployeeDetail extends React.Component {

    render() {
    return (

        <div className='employee-list'>
            <div className="title-table">Employee Detail Information</div>    
            <Image src={female} thumbnail width="200px" height="200px"></Image>
        </div>
    )
}
}