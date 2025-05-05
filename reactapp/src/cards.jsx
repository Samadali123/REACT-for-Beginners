import React, { useState } from 'react';
import axios from 'axios';


const Cards = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers =  async ()=>{
    try {
         const response = await  axios.get("https://jsonplaceholder.typicode.com/users");
         if(response){
            console.log(response);
            setUsers(response?.data)
         }

    } catch (error) {
          console.error(error)
    }
  }

  return (
    <div className="users-container">
      <h1 className="heading">JSONPlaceholder Users</h1>
      <div className="center-button">
        <button className="fetch-btn" onClick={fetchUsers}>
          Fetch Users
        </button>
        <button className="fetch-btn" onClick={()=> setUsers([])}>
          Delete Users
        </button>
      </div>
      <div className="card-grid">
          {
             users.length  == 0 ? <h2>No Users Found !</h2> : 
            
              users.map((user, index) => {
                return (
                  <div className="card" key={index}>
                    <div className="card-header">
                      <h2 className="card-title">{user.name}</h2>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{user.email}</p>                    
                    </div>
                  </div>
                );
              })
            
          }
      </div>
    </div>
  );
};

export default Cards;
