import React, { useState, Fragment } from "react";
import "./medre.css";
import  {useEffect} from 'react';

function MedResultspatient(props) {
  const savedemail = window.sessionStorage.getItem("email");

   console.log(savedemail);

  const [data, setData] = React.useState([])

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
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr>
                <td>{data.medication_name}</td>
                <td>{data.frequency}</td>
               <td>{data.med_start_date}</td>
               <td>{data.med_end_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default MedResultspatient;