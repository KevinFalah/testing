import React, {Children, createContext, useState} from 'react'

export const GlobalContext = createContext()

export function GlobalProvider(props) {

    const [dataRegis, setDataRegis] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const [dataLogin, setDataLogin] = useState({
        email: "",
        password: "",
      });

      let state = {
        dataRegis,
        setDataRegis,
        dataLogin,
        setDataLogin
      }

    return(
        <GlobalContext.Provider value={state}>
            {props.children}
        </GlobalContext.Provider>
    )
}