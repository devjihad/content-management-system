import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../Utily/LocalStore';
export const Authprovider = createContext()
const AuthContaxt = ({children}) => {

    const [data, setdata]=useState(null)
    console.log(data)

    useEffect(()=>{
        setLocalStorage()
        const {emploees,adminn}= getLocalStorage()
        setdata({emploees,adminn})
        

    },[])
    return (
        <div>
           <Authprovider.Provider value={data}>
             {children}
           </Authprovider.Provider>
        </div>
    );
};

export default AuthContaxt;