import { useState } from "react";
import { GeneralContext } from "./GeneralContext";


export const GeneralProvider = ({ children }) => {

    const [ openModal, setOpenModal ] = useState(false);
    const [ alert, setAlert ] = useState({ open:false, message: '', type:'primary' });
    
    return (
        <GeneralContext.Provider value={{
            openModal,
            setOpenModal,
            alert,
            setAlert
        }}>
            { children }
        </GeneralContext.Provider>
    );
}