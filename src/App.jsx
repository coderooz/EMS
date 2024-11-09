import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage, getLocalStorage } from './utils/localSorage';

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {

  }


  useEffect(()=>{
    // setLocalStorage();
  });
  return (
    <>
      {!user ? <Login/> : ''}
      {/*  */}
      <EmployeeDashboard/>
      {/* <AdminDashboard/> */}
    
    </>
  )
}

export default App
