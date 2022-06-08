import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import list from '@fullcalendar/list';
import Button from '@mui/material/Button';

//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

import "./LeaveCalendar.css";

export default class LeaveCalendar extends React.Component {
    calendarComponentRef = React.createRef();

    state = {
        calendarWeekends: true,
        calendarEvents: [
            {
                title: 'Makara',
                start: '2022-06-03T10:00:00',
            },
            {
                title: 'Event2',
                start: '2022-06-07'
            },
            {
                title: 'Event2',
                start: '2022-06-08'
            }
        ]
    };

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
                        columnFormat= 'dddd'
                        eventLimit= {true}
                        editable= {false}
                        height={700}
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
                        events={this.state.calendarEvents}
                    
                    />
                </div>

                <div className="toggle-weekday">
                    <Button variant="outlined" onClick={this.toggleWeekends}>toggle weekends</Button>
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