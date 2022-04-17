import React, { useState, Fragment } from "react";
import "./medre.css";
import  {useEffect} from 'react';
import { nanoid } from "nanoid";

function MedResultstemp(props) {
  const [data, setData] = React.useState([])
  const savedemail = window.sessionStorage.getItem("email");
  
  

  useEffect(() => {
    async function fetchMyAPI() {
      let api = 'https://fathomless-gorge-20039.herokuapp.com/api/medication/:';

      let temp = api + savedemail;
      let res = await fetch(temp, {
        method: "GET"
      });
      let resJson = await res.json();
      setData(resJson)
      
     
    }
  fetchMyAPI();
  }, [])




  const [addFormData, setAddFormData] = useState({
    MedicineName: "",
    frequency: "",
    startdate: "",
    enddate: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
   
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    
    console.log(newFormData)
    setAddFormData(newFormData);
  };


  const handleAddFormSubmit = (event) => {
    
    const newPatient = {
      id: nanoid(),
      MedicineName: addFormData.MedicineName,
      frequency: addFormData.frequency,
      startdate: addFormData.startdate,
      enddate: addFormData.enddate,
    };

    const newPatients = [...data, newPatient];
    setData(newPatients);
    const savedpatientid = window.sessionStorage.getItem("patientid");
    const min = Math.ceil(0);
    const max = Math.floor(2147);
    const medid = Math.floor(Math.random() * (max - min) + min); 

    let payload={
    
      "patient_id":savedpatientid,
      "med_id" :medid,
      "MedicineName":newPatient.MedicineName,
      "frequency": newPatient.frequency,
      "startdate":newPatient.startdate,
      "enddate":newPatient.enddate
    }

    // console.log(payload);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    };
    const response = fetch('https://fathomless-gorge-20039.herokuapp.com/api/createmeddata', requestOptions)
      .then((response) => {
        if(!response.ok) throw new Error(response.status);
      })
      // console.log('response is ' + JSON. stringify(response));
  };

  const handleDeleteClick = (patientId,event) => {
  
    const savedpatientid = window.sessionStorage.getItem("patientid");
    const newpatientarray = [...data];

    const index = data.findIndex((data) => data.id === patientId);

    let deleteddata = newpatientarray.splice(index, 1);
    
    let data1={
      //change this hard coded value
      "patient_id":savedpatientid,
      "medication_name":deleteddata[0].medication_name
      
    }
    setData(newpatientarray);


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data1)
    };

    const response = fetch('https://fathomless-gorge-20039.herokuapp.com/api/deletemeddata', requestOptions)
      .then((response) => {
        if(!response.ok) throw new Error(response.status);
      })
      // console.log('response is ' + JSON. stringify(response));

  };




  return (
    <div className="app-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Medicine frequency</th>
              <th>Medicine Start date</th>
              <th>Medicine end date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr>
                <td>{data.medication_name}</td>
                <td>{data.frequency}</td>
               <td>{data.med_start_date}</td>
               <td>{data.med_end_date}</td>
               <td>
               <button type="button" onClick={() => handleDeleteClick(data.id)}>
          Delete
        </button>
        
               </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add an entry</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="MedicineName"
          required="required"
          placeholder="Enter a medicine name.."
          onChange={handleAddFormChange}
       
        />
        <input
          type="text"
          name="frequency"
          required="required"
          placeholder="Enter medicine frequency.."
          onChange={handleAddFormChange}
         
        />
        <input
          type="date"
          name="startdate"
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="enddate"
          required="required"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default MedResultstemp;