import React, { useState } from 'react';

const Components = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    });
    console.log({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="#">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Components;
