import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Template.css" 

const Template = () => {
    const initialValues = {qno:"",subpart:"",Max_Marks: "",BT:"",CO: ""};
    const [formValues, setformValues]=useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
      const navigate = useNavigate();
      const handleChange=(event)=>{
        console.log(event.target);
        const {name,value}=event.target;
        setformValues((prev) => ({
          ...prev,
          [name]: value,
        }));
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        // setErrors(validation(formValues));
        setisSubmit(true);
    //     if (formValues.password !== formValues.confirmPassword) {
    //       setErrors({ confirmPassword: "Passwords do not match" });
    //   } 
     // else {
        try {
          // Make an HTTP POST request to your Express API
          console.log('Form Values:', formValues);
          const response = await axios.post('http://localhost:8081/templatecreate', formValues);
    
          // Handle the response, e.g., show a success message
          console.log('Server Response:', response.data);
          navigate('/templatecreate');
        } catch (error) {
          // Handle errors, e.g., show an error message
          console.error('Error during template creation:', error);
        }
     //}
  
      setisSubmit(true);
      };  
    
  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
    <h1 id="login">QP Template</h1>
    <div class="label">
        <label class="font" for="questionNo">Question No.</label>
        <input type="text" id="questionNo" name='qno'  value={formValues.qno} onChange={handleChange} required/>
    </div>
    <div class="label">
            <label class="font" for="subpartNo">Subpart No.</label>
            <input type="text" id="subpartNo" placeholder='Enter subpart a,b,c...' name='subpart'  value={formValues.subpart} onChange={handleChange}/>
        </div>
    <div class="label">
        <label class="font" for="maxMarks">Maximum Marks</label>
        <input type="number" id="maxMarks" name='Max_Marks'  value={formValues.Max_Marks} onChange={handleChange} required />
    </div>
    <div class="label">
        <label class="font" for="bt">BT</label>
        <input type="text" id="bt" name='BT' value={formValues.BT} onChange={handleChange} required />
    </div>
    <div class="label">
        <label class="font" for="co">CO</label>
        <input type="text" id="co" name='CO' value={formValues.CO} onChange={handleChange} required />
    </div>
    <div class="button-wrapper">
        <button class="button" type="submit">Add</button>
    </div>
</form>
    </div>
  )
}

export default Template