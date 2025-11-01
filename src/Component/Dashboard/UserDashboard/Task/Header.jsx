import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between py-10 '>
            <h1>Hello <br /> <span>User</span></h1>
            <button className='bg-red-500 px-5 py-2 rounded-xl'>Logout</button>
        </div>
    );
};

export default Header;