import React from 'react'

const Data = () => {

    const users = [
        { name: "Aarav Sharma", age: 24, profession: "Software Developer" },
        { name: "Priya Singh", age: 27, profession: "UI/UX Designer" },
        { name: "Rahul Verma", age: 30, profession: "Project Manager" },
        { name: "Sneha Patel", age: 22, profession: "Data Analyst" },
        { name: "Mohit Jain", age: 26, profession: "DevOps Engineer" },
        { name: "Anjali Mehta", age: 29, profession: "Frontend Developer" },
        { name: "Karan Kapoor", age: 31, profession: "Backend Developer" },
        { name: "Neha Sinha", age: 25, profession: "QA Engineer" },
        { name: "Vikram Chauhan", age: 28, profession: "Product Owner" },
        { name: "Tanya Desai", age: 23, profession: "Mobile App Developer" }
      ];
      
    
  return (
    <div>
        {
            users.map((user,index)=> {
                   return  <>
                         <ul index={index}>
                             <ol>
                                 <h1>{user.name}</h1>
                                 <h2>{user.age}</h2>
                                 <h3>{user.profession}</h3>
                             </ol>
                         </ul>
                   </>
            })
        }
    </div>
  )
}

export default Data