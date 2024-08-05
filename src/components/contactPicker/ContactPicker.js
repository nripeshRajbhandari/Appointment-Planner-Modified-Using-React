import React from "react";

export const ContactPicker = ({contacts, name, setName}) => {

  return (
    <>
      <label>Contact Name:
        <input type="text" list="select-contact" name="list-contact" id="list-contact" required onChange={({target}) => setName(target.value)} value={name}/></label>
        <datalist id="select-contact" >
          {(contacts.length === 0) ? null : (
            contacts.map( contactRecord => (<option value={contactRecord.name}>{contactRecord.name}</option>) )
          ) }
        </datalist>
    </>
    )
  
};
