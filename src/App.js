import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployee = true;
  return (
    <div className="App bg-red-50">
      {showEmployee ? 
      <>
      <input type="text" onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }}/>
        <Employee name="Sam" role="Balls"/>
        <Employee name="Pam"role={role}/>
        <Employee name="Tam"/>
        <Employee name="Jam"/>
        <Employee name="Lam"/>
        </>
      : 
      <p>You don't have access</p>
      }
    </div>
  );
}

export default App;
