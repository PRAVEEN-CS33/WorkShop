import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Api from '../../Api';

function Register() {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [mobileBrand, setmobileBrand] = useState('');
    const [mobileName, setmobileName] = useState('');
    const [complaintType, setComplaintType] = useState('');
    const [complaintDetails, setComplaintDetails] = useState('');
    const navigate = useNavigate();
    
    const data = {
      customerName:customerName,
      phoneNumber:phoneNumber,
      mobileBrand:mobileBrand,
      mobileName:mobileName,
      complaintType:complaintType,
      complaintDetails:complaintDetails
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/success');

        Api.createUser(data)
           .then((Response)=>{
              console.log(Response)
           })
           .catch((Error) => {
              console.log(Error)
           })
           
      };

  return (
    <div>
    <div className='reg'>
        <h1 className='h1'>Register your Complaint</h1>
        <div>
        <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(event) => setCustomerName(event.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="Enter your Phone Number"
            required
          />
        </div>
        <div>
          <select
            id="mobileBrand"
            value={mobileBrand}
            onChange={(event) => setmobileBrand(event.target.value)}
            required
          >
            <option value="">--Select MobileBrand --</option>
            <option value="RealMe">RealMe</option>
            <option value="Redme">Redme</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Vivo">Vivo</option>
            <option value="Oppo">Oppo</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            id="mobileName"
            value={mobileName}
            onChange={(event) => setmobileName(event.target.value)}
            placeholder="Enter your MobileName"
            required
          />
        </div>
        <div>
          <select
            id="complaintType"
            value={complaintType}
            onChange={(event) => setComplaintType(event.target.value)}
            required
          >
            <option value="">--Select Complaint Type--</option>
            <option value="Network Issues">Network Issues</option>
            <option value="Billing Problems">Billing Problems</option>
            <option value="Service Outage">Service Outage</option>
            <option value="Display">Display</option>
            <option value="Mic">Mic</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <textarea
            id="complaintDetails"
            value={complaintDetails}
            onChange={(event) => setComplaintDetails(event.target.value)}
            placeholder="Enter your complaints"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
        </div>
        </div>
    </div>
  )
}

export default Register