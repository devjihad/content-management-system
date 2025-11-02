import React from 'react';
import Header from '../UserDashboard/Task/Header';
import CreateTask from './Tasks/CreateTask';
import AllTask from './Tasks/AllTask';
const AdminDashboard = () => {
    return (
        <div className='px-10'>
            <Header/>
            <CreateTask/>
            <AllTask/>
        </div>
    );
};

export default AdminDashboard;