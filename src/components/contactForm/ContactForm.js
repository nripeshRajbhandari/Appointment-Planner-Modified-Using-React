import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:<input type="text" name="name" value={name} onChange={({target}) => setName(target.value)}/></label>
        <label htmlFor="phone">Phone:<input type="tel" name="phone" value={phone} onChange={({target}) => setPhone(target.value)}/></label>
        <label htmlFor="email">Email:<input type="email" name="email" value={email} onChange={({target}) => setEmail(target.value)}/></label>
        <input type="submit" />
      </form>
    </>
  );
};

