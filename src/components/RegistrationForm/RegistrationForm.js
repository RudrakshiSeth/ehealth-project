import React, {useState} from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import { PropTypes } from 'react'
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants.js';
//import { withRouter } from "react-router-dom";


function RegistrationForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword:""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    
    }

    // let handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       let res = await fetch("http://localhost:5000/health", {
    //         method: "GET"
    //       });
    //       let resJson = await res.json();
    //       if (res.status === 200) {
    //         console.log("balle balle ");
    //       } else {
    //        console.log("Some error occured");
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

      let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:5000/api/post/health", {
            method: "POST",
            body: JSON.stringify({
              email: "bablu",
              name:"tingu"
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
              console.log("ok report");
          
    
          } else {
            console.log("error")
          }
        } catch (err) {
          console.log(err);
        }
      };
    
  return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={handleSubmit} >
            <div className="form-group text-center">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       value={state.email}
                       onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                       onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div> 
                 <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    
                    Register
                </button>
            </form>
        </div>
    )
}
export default RegistrationForm ; 