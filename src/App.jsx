
import Login from './Component/Auth/Login';
import UserDashboard from './Component/Dashboard/UserDashboard/UserDashboard';
import AdminDashboard from './Component/Dashboard/AdminDashboard/AdminDashboard';
import { useContext, useState } from 'react';
import { Contaxt } from './Context/AuthContaxt';


const App = () => {
  const user = useContext(Contaxt)
  console.log(user)

  const [data , setdata] =useState(null)
   console.log(data)
  const Click =(email, password)=>{
    if(email === 'admin@gmail.com' && password == 1234){
      setdata('Admin')
     
  }
  else if(email === 'emploee@gmail.com' && password == 1235){
    setdata('emploee')
  }
  else{
    alert('Invalid Credintial')
  }
  }
 
  return (
    <div>
      {
        !data ? <Login Click={Click}/> : ''
      }
      {
        data =='Admin' ?<AdminDashboard/> :''
      }
      {
        data == 'emploee' ? <UserDashboard/> : ''
      }
      {/* <Login></Login> */}
      {/* <UserDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  );
};

export default App;