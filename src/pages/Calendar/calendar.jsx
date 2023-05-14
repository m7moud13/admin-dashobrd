import React from 'react'
import { PageTitle } from '../../components/PageTitle';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { tokens } from '../../themes';
import { formatDate } from 'fullcalendar';
const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currontevent,setcurrontevent] = useState([])
    const dateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const api = selected.view.calendar;
        api.unselect();
        if (title) {
            api.addEvent({
                id:`${selected.dateStr}-${title}`,
                title,
                start:selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }
    const eventClick = (selected) => {
        if(window.confirm(`are you sure you want to delet this ?${selected.event.title}`))
        {
            selected.event.remove()
        }
    }
    return (
    <>
        <Box>
            <PageTitle title="Calendar" subtitle="Full Calendar Interactive Page" />
                <Box display={'flex'} justifyContent={'space-between'} gap={'20px'} height={'75vh'} >
                    <Box flex={'1 1 20%'} p={'15px'} bgcolor={colors.primary[400]}>
                        <Typography variant='h5'>Events</Typography>
                        <List>
                                {currontevent.map((event) => (
                                    <ListItem
                                        key={event.id}
                                        sx={{
                                        backgroundColor: colors.green[500],
                                        margin: "10px 0",
                                        borderRadius: "2px",
                                        }}
                                    >
                                        <ListItemText
                                        primary={event.title}
                                        secondary={
                                            <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                            </Typography>
                                        }
                                        />
                                    </ListItem>
                    ))}
                            </List>
                    </Box>
                    <Box flex={'1 1 100%'} >
                        <FullCalendar 
                        height={'75vh'}
                        plugins={[
                            dayGridPlugin,
                            interactionPlugin,
                            timeGridPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left:"prev,next today",
                            center:"title",
                            right:"dayGridMonth,timeGridWeek,timeGridDay,list"
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        dayMaxEvents={true}
                        selectMirror={true}
                        select={dateClick}
                        eventClick={eventClick}
                        eventsSet={(event) => setcurrontevent(event)}
                        initialEvents={{
                            id:"123",
                            title:"All-day event",
                            date:"5/10/2023"
                        }}
                        />

                    </Box>
            </Box>
        </Box>
    </>
    )
}
export default Calendar;
