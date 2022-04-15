import React from "react";
import "./lab.css";
import  {useEffect} from 'react';

function DiagResultspatient(props) {
  const savedemail = localStorage.getItem("email");
   console.log(savedemail);

  const [data, setData] = React.useState([])

  useEffect(() => {
    async function fetchMyAPI() {
      let api = 'https://fathomless-gorge-20039.herokuapp.com/api/lab/:';

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

              <th>Test name</th>
              <th>Data test taken</th>
              <th>Artifacts</th>
              <th>Reffered_by</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
                          
              <tr>
                <td>{data.test_name}</td>
                <td>{data.date_test_taken}</td>
               <td>{data.artifacts}</td>
               <td>{data.reffered_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default DiagResultspatient;