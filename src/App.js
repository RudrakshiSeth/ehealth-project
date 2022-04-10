
import './App.css';
import React from 'react';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp' ;
import MedResultsPatient from './Pages/MedResults/MedResultsPatient' ;
import MedResultsProvider from './Pages/MedResults/MedResultsProvider' ;
import DiagResultsPatient from './Pages/DiagResults/DiagResultsPatient' ;
import DiagResultsProvider from './Pages/DiagResults/DiagResultsProvider.js' ;
import LabResults from './Pages/LabResults/LabResults' ;
import PatientPortal from './Pages/PatientPortal/PatientPortal';
import HomePage from './Pages/HomePage/HomePage';
import DynamicTable from './Pages/MedResults/MedResultsProvider' ;
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
      <div className="App">
       <Router>
        <Routes>
        <Route path='/route/SignUp' element={<SignUp />} />
        <Route path='/route/Login' element={<Login />} />
        <Route path='/route/PatientPortal' element={<PatientPortal />} />
        <Route path='/route/MedResultsPatient' element={<MedResultsPatient />} />
        <Route path='route/MedResultsProvider' element={<MedResultsProvider />} />
        <Route path='/route/LabResults' element={<LabResults />} />
        <Route path='/route/DiagResultsPatient' element={<DiagResultsPatient />} />
        <Route path='/route/DiagResultsProvider' element={<DiagResultsProvider />} />
        <Route path='/route/DynamicTable' element={<DynamicTable />} />
        <Route path='/' element={<HomePage />} /> 
        </Routes>
        </Router>
      </div>
    
  );
};

export default App;

