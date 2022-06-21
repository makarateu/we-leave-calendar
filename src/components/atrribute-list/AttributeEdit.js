import React from "react";
import './AttributeEdit.css';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default class AttributeEdit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Label:"",
        Dn:""
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'text' ? target.value : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
          <div className="attribute-form">
          <Box className="title-table" sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tab  label="Edit Attribute" textColor="black"/>
          </Box>

        <form>
            <input
              type="text"
              name="Label"
              placeholder="Label"
              checked={this.state.Label}
              onChange={this.handleInputChange} />
          <br />
            <input
              type="text"
              name="Dn"
              placeholder="Dn"
              value={this.state.Dn}
              onChange={this.handleInputChange} />

          <input type="submit" value="Create" />
        </form>
        </div>
      );
    }
  }
