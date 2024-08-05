import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name , setName] = useState('');
  const [phone , setPhone] = useState('');
  const [email , setEmail] = useState('');
  const [duplicate , setDuplicate] = useState(false);

  // const { contacts, addContacts } = props ;



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    console.log('inside handleSubmit ContactsPage.js');
    if(!duplicate) {
      const newContact = {
        name,
        phone,
        email
      };

      console.log(newContact);
      console.log(`duplicate: ${duplicate}`);
      addContacts(newContact);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(()=> {

    console.log('inside useEffect');
    console.log(contacts);
    const nameExist = contacts.find( contact => contact.name === name );
    console.log(`nameExist: ${nameExist}`);
    // console.log(`name:${name}`);
    setDuplicate( () => { return nameExist ? true : false});      

  },[name, contacts, duplicate]);

  const contactFormProps = {name, setName, phone, setPhone, email, setEmail,handleSubmit};

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        { duplicate && <h3>Name Already Exists!!</h3> }
        <ContactForm {...contactFormProps} /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        { (contacts.length === 0) ? null : (
          <TileList records={contacts}/>
        ) }
      </section>
    </div>
  );
};
