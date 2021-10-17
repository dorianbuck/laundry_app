import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

const App = () => {
  const businessHours = [
    {
      daysOfWeek: [1, 2, 3, 4, 5],
      startTime: "07:00",
      endTime: "19:00",
    },
    {
      daysOfWeek: [6],
      startTime: "10:00",
      endTime: "19:00",
    },
  ];
  return (
    <div>
      <h1>Hello laundry world!</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay",
        }}
        businessHours={businessHours}
      />
    </div>
  );
};

export default App;
