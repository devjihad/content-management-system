import React, { createContext } from 'react';
export const Contaxt = createContext()
const AuthContaxt = ({children}) => {
    return (
        <div>
           <Contaxt.Provider value={'data'}>
             {children}
           </Contaxt.Provider>
        </div>
    );
};

export default AuthContaxt;