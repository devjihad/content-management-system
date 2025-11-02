import React from 'react';
import Login from './Component/Auth/Login';
import UserDashboard from './Component/Dashboard/UserDashboard/UserDashboard';
import AdminDashboard from './Component/Dashboard/AdminDashboard/AdminDashboard';

const App = () => {
  return (
    <div>
      {/* <Login></Login> */}
      {/* <UserDashboard/> */}
      <AdminDashboard/>
    </div>
  );
};

export default App;