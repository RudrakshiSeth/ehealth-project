
import './App.css';
import React from 'react';
import Header from './Pages/Header/Header';
import RegistrationForm from './Pages/RegistrationForm/RegistrationForm';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp' ;
import MedResults from './Pages/MedResults/MedResults' ;
import DiagResults from './Pages/DiagResults/DiagResults' ;
import LabResults from './Pages/LabResults/LabResults' ;
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
        <Route path='/route/MedResults' element={<MedResults />} />
        <Route path='/route/LabResults' element={<LabResults />} />
        <Route path='/route/DiagResults' element={<DiagResults />} />
        </Routes>
        </Router>
      </div>
    
  );
};

export default App;

