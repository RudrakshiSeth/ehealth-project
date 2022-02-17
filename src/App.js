
import './App.css';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp' ;
import PatientPortal from './components/PatientPortal/PatientPortal';

function App() {
  return (
      <div className="App">
        {/* <Login /> */}
        {/* <SignUp /> */}
        <PatientPortal />
      </div>
    
  );
};

export default App;
