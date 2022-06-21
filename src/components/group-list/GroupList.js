import React from "react";
import '@fontsource/roboto/700.css';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import MUIDataTable from "mui-datatables";

const columns = [{
  name: "Label",
  options: {
  filter: false,
  sort: false
  }
},
{
  name: "Cn",
  options: {
  filter: false,
  sort: false
}
},
  {
  name: "Action",
  options: {
    filter: false,
    sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
          return (
                <Button variant="contained" href="GroupEdit">
                  Edit
                </Button>
          )
      }
  }
}]

  const data = [
  ["DevOps" ,	"ou=DevOps,ou=employee,ou=people,dc=web-essentials,dc=asia"]
]

export default class GroupList extends React.Component {

    render() {
          
      return (


    <div>                  
    
    <Box className="title-table" sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tab  label="Group List" textColor="black"/>
    </Box>

    <div className="employee-table">

    <MUIDataTable
    data={data}
    columns={columns}
    />
    </div>
    
    {/* Copyright © Web Essentials 2019 - 2022 */}
    </div>
  )
}
}