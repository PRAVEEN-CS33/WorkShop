import React, { useState, useEffect } from 'react';
import './complaint.css'
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";
import Api from '../../Api';

function Complaint() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    Api.getUsers()
       .then((response) => {
          setUsers(response.data);
       })
       .catch((Error) => {
          console.log(Error);
       })
    },[]);

    const delet = (name)=>{
      Api.deleteUser(name)
         .then((responce)=>{
              const newdata = users.filter((user)=>{user.name !== name })
              setUsers(newdata)
         })
    }

    const update = (name, newName) => {
      Api.updateUser(name, newName)
         .then((responce)=>{
          const newdata = users.map((user)=>{
            if(users.name === name){
              return {...users, ...newName}
            }
            return users;
          })
          setUsers(newdata)

         })
    }
  return (
    <div className='container'>
        <h1>Complaint Details</h1>
        <table border={1}>
          <thead>
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>MobileBrand</th>
                <th>MobileName</th>
                <th>Complaint Type</th>
                <th>Complaint Details</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.mobileBrand}</td>
              <td>{user.mobileName}</td>
              <td>{user.complaintType}</td>
              <td>{user.complaintDetails}</td>
              <td><button onClick={()=>{
                  const newData = prompt("Enter new name:");
                  if (newData) {
                    update(users.name, { name: newData });
                  }
              }}><GrDocumentUpdate/></button></td>
              <td><button onClick={()=>{delet(users.name)}}><RiDeleteBin5Line/></button></td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Complaint;