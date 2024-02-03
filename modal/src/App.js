
import './App.css';
import {Modal} from "react-bootstrap";    
import { useState } from 'react';


function App() {

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob:""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlesubmit=(e)=>{
  e.preventDefault();

  let isvalid =true;

  const {email,  phone, dob } = formData;

  console.log(formData)

    // Validate the form data

    // Validate the email address
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!regex.test(email)) {
      alert("Invalid email. Please enter a valid email address.");
      return;
    }

    if (phone < 1000000000 || phone > 9999999999) {
      isvalid = false;
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    let now = new Date().toLocaleDateString('en-CA')
    console.log(now)

    if (dob > now) {
      isvalid = false;
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

   if(isvalid){
    e.target.reset()
   }
  
  }


  return (
    
    <div className="modal" >
      <h1>User Details Modal</h1>
      <button onClick={handleShow}>Open Form</button>
      { show && 
      <>
      <div className="modal-content" onClick={handleClose}> </div>
        <div className='modalform'>
        <form className='form' onSubmit={handlesubmit}>
        <h1>Fill Details</h1> 
        <label htmlFor="username">Username:</label>
        <input required name="username" id="username" type="text"  value={formData.name}
        onChange={handleChange}/>
        <label htmlFor="email">Email Address:</label>
        <input required name="email" id="email" type="text" value={formData.name}
        onChange={handleChange}/>
        <label htmlFor="phone">Phone Number:</label>
        <input required name="phone" id="phone" pattern="[0-9]{}" value={formData.name}
        onChange={handleChange}/>
        <label htmlFor="dob">Date of Birth:</label>
        <input required name="dob" id="dob" type="date" value={formData.name}
        onChange={handleChange}/>
        <button className='submit-button' type="submit">Submit</button>
      </form>
        
      

      
     </div>
     </>}

      
    </div>
    
  );
}

export default App;
