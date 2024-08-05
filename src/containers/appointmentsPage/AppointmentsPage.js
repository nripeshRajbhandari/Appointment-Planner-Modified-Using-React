import React, { useState, useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, addAppointments, contacts}) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isContactRecorded, setIsContactRecorded] = useState(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

    console.log('inside appointmentsPage handleSubmit function')
    if(isContactRecorded && name){
      const newAppointment = {
        name,
        title,
        date,
        time,
      };

      addAppointments(newAppointment);
      setName('');
      setTitle('');
      setDate('');
      setTime('');
    }else {
      console.log(`Name field shouldn't be empty and should already be present in the records!!`);
    }   
   
  };

  useEffect(() => {

    console.log('inside AppointmentsPage useEffect hook')

    const getContact = contacts.find( record => record.name === name)

    console.log(getContact);

    getContact ? setIsContactRecorded(true) : setIsContactRecorded(false)

    console.log(isContactRecorded);

  },[name,isContactRecorded]);


  const appointmentFormProps = {
    contacts,
    title,
    setTitle,
    name,
    setName,
    date,
    setDate,
    time,
    setTime,
    handleSubmit
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {(!isContactRecorded && name) && <p>The Name not found in the Record!!</p>}
        <AppointmentForm {...appointmentFormProps} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        { appointments.length === 0 ? null : (<TileList records = {appointments} />) }
      </section>
    </div>
  );
};