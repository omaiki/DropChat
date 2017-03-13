import React from 'react';


export const Appointment = ({appointment}) =>
  <div className='appointment'>
    <h3>{appointment.title}</h3>
    <p>{appointment.appt_time}</p>
  </div>