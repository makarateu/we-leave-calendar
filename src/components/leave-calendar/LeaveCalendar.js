import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import list from '@fullcalendar/list';
import Button from '@mui/material/Button';
import axios from 'axios';

//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import "./LeaveCalendar.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Holiday from './holiday'
//import Events from './events'
//import Events1 from './event1'

const api = axios.create({
    //baseURL: `https://web-essentials.co/api/v1/employee/:id/leave-request`
    //baseURL: `http://localhost:3000/events`
})

const theme = createTheme({
palette: {
    primary: {
    // WE color
    main: '#3BC2D7',
    },
    secondary: {
    main: '#ff00ff',
    },
},
});

export default class LeaveCalendar extends React.Component {

    calendarComponentRef = React.createRef();

    state = {
        calendarWeekends: true,

        calendarEvents: []
    };

    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({calendarEvents: res.data})
        })
    }

    render() {
        return (
            <div className="calendar">
            
                <div className="grid">
                    <FullCalendar
                        initialView="timeGridWeek"
                        firstDay='1'
                        aspectRatio= '1.8'
                        slotMinTime='08:00:00'
                        slotMaxTime='19:00:00'
                        editable= {false}
                        height={750}
                        themeSystem='bootstrap'

                        businessHours= {
                            {
                            //(0=Sunday)
                            daysOfWeek: [ 1, 2, 3, 4, 5 ], // Monday - Friday
                            startTime: '08:00', 
                            endTime:'17:30',
                            }
                        }
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin, list, bootstrap5Plugin]}
                        ref={this.calendarComponentRef}
                        weekends={this.state.calendarWeekends}
                        eventColor= '#50C878'

                        //get leave events
                        events={this.state.calendarEvents}
                        
                        //eventSources = {
                        //    [Events, Events1]
                        //}

                    
                    />
                </div>

                <div className="toggle-weekday">
                    <ThemeProvider theme={theme}> <Button variant="outlined" onClick={this.toggleWeekends}>toggle weekends</Button> </ThemeProvider>
                </div>
            </div>
        );
    }

    toggleWeekends = () => {
    this.setState({
      // update a property
        calendarWeekends: !this.state.calendarWeekends
    });
    };

}