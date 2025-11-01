import React from 'react';
import Header from './Task/Header';
import TaskNumber from './Task/TaskNumber';
import Tasklist from './Task/Tasklist';

const UserDashboard = () => {
    return (
        <div className='bg-stone-900 font-serif px-10 min-h-screen'>
            <Header/>
            <TaskNumber/>
            <Tasklist/>
        </div>
    );
};

export default UserDashboard;