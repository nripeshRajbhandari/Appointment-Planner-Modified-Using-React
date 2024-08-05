import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
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
}) => {

  // const handleContact = ({target}) => {
  //   console.log(`handleContact: ${target.value}`);
  //   setContact(target.value);
  // };

  return (
    <>
      <ContactPicker contacts ={contacts} name = {name} setName = {setName}  />
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Name:<input type="text" name="name" id="name" value={contact} readOnly/></label> */}
        <label htmlFor="title">Title:<input type="text" name="title" id="title" value={ title } onChange={({ target }) => setTitle(target.value)}/></label>
        <label htmlFor="date">Date:<input type="date" name="date" id="date" value={ date } onChange={({ target }) => setDate(target.value)}/></label>
        <label htmlFor="time">Time:<input type="time" name="time" id="time" value={ time } onChange={({ target }) => setTime(target.value)}/></label>
        <input type="submit" />        
      </form>
    </>
  );
};
