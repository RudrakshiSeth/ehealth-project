
import './App.css';
import React from 'react';
import Header from './Pages/Header/Header';
import RegistrationForm from './Pages/RegistrationForm/RegistrationForm';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp' ;
import PatientPortal from './Pages/PatientPortal/PatientPortal';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
      <div className="App">
       <Router>
        <Routes>
        <Route path='/route/SignUp' element={<SignUp />} />
        <Route path='/route/Login' element={<Login />} />
        <Route path='/route/PatientPortal' element={<PatientPortal />} />
        </Routes>
        </Router>
      </div>
    
  );
};

export default App;

