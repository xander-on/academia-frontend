import { useContext } from "react";
import { CustomAlert, Navbar } from "../components";
import { GeneralContext } from "../../store/context";



export const GeneralLayout = ({ children }) => {
    const context = useContext( GeneralContext );

    return (
        <div className="general-layout position-relative">
            {context.alert.open && <CustomAlert dataAlert={{message:'Hello world'}}/>}
            <Navbar />
            <div className="container mt-5">
                { children }
            </div>

        </div>
    );
}
