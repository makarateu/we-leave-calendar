import React from "react";
import "./EmployeeList.css";
import '@fontsource/roboto/700.css';
import Helmet from 'react-helmet';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "#",
    options: {
    filter: true,
    sort: true
  }
  },
  {
  name: "Photo",
  options: {
    filter: true,
    sort: false
  }
},
  {
    name: "Last Name",
    options: {
    filter: true,
    sort: false
  }
  },
  {
    name: "First Name",
    options: {
    filter: true,
    sort: false
  }
  },
  {
    name: "Gender",
    options: {
    filter: true,
    sort: false
  }
  },
  {
    name: "DOB",
    options: {
    filter: true,
    sort: false
  }
  },
  {
    name: "Status",
    options: {
    filter: true,
    sort: false
  }
  },
  {
    name: "Mobile",
    options: {
    filter: true,
    sort: false
  }
  },
  {
    name: "E-mail",
    options: {
    filter: true,
    sort: false
  }
  },
  {
    name: "Position",
    options: {
    filter: true,
    sort: false
  }
  },
  {
    name: "Department",
    options: {
    filter: true,
    sort: false
  }
  },
  {
  name: "Actions",
  options: {
      customBodyRender: (value, tableMeta, updateValue) => {
          return (
              //  <Button onClick={() => console.log(value, tableMeta) }>
                <Button variant="contained" href="EmployeeDetail">
                  Details
              </Button>
          )
      }
  }
  }]


const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY", "M", "22/Apr", "Single", "0123457", "Joe@web-essentials.co", "CEO", "N/A","edit"],
  ["Joe James", "Test Corp", "Yonkers", "NY", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["Joe James", "Test Corp", "Yonkers", "NY", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["Joe James", "Test Corp", "Yonkers", "NY", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["John Walsh", "Test Corp", "Hartford", "CT", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["Bob Herm", "Test Corp", "Tampa", "FL", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["James Houston", "Test Corp", "Dallas", "TX", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["Joe James", "Test Corp", "Yonkers", "NY", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["John Walsh", "Test Corp", "Hartford", "CT", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["Bob Herm", "Test Corp", "Tampa", "FL", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["James Houston", "Test Corp", "Dallas", "TX", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["Joe James", "Test Corp", "Yonkers", "NY", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["John Walsh", "Test Corp", "Hartford", "CT", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["Bob Herm", "Test Corp", "Tampa", "FL", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit'],
  ["James Houston", "Test Corp", "Dallas", "TX", "M", '22/Apr', 'Single', '0123457', 'Joe@web-essentials.co', 'CEO', 'N/A','edit']
];

const options = {
  filterType: "dropdown",
  rowsPerPage:[20],
  rowsPerPageOptions:[5,10,20,50],
  jumpToPage: true,
  textLabels:{
    pagination: {
      next: "Next >",
      previous: "< Previous",
      rowsPerPage: "Total items Per Page",
      displayRows: "OF"
    }
  },
  onChangePage (currentPage) {
    console.log({currentPage});
  },
  onChangeRowsPerPage (numberOfRows) {
    console.log({numberOfRows});
  }
  };


export default class EmployeeList extends React.Component {

render() {
  return (

<div className="employee-table">

  <Helmet><title>Employee List | Web Essentials</title></Helmet>


<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tab  label="Employee List" textColor="black"/>
</Box>

  <MUIDataTable
    data={data}
    columns={columns}
    options={options}
  />

</div>
  );
}
}