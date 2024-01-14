import { useEffect, useState } from "react";
import { GeneralContext } from "./GeneralContext";
import { useFetch } from "../../shared/hooks";


export const GeneralProvider = ({ children }) => {

    const [ openModal, setOpenModal ] = useState(false);
    const [ alert, setAlert ] = useState({ open:false, message: '', type:'primary' });

    //cargar data materias backend
    const { data:dataMaterias } = useFetch('http://localhost:8080/api-academia/v1/materias');
    const [ materias, setMaterias ] = useState([]);

    useEffect(() => {
        setMaterias( dataMaterias?.results );
    }, [dataMaterias]);


    //cargar data profesores backend
    const { data:dataProfesores } = useFetch('http://localhost:8080/api-academia/v1/profesores');
    const [ profesores, setProfesores ] = useState([]);

    useEffect(() => {
        setProfesores( dataProfesores?.results );
    }, [dataProfesores]);


    //cargar data aulas backend
    const { data:dataAulas } = useFetch('http://localhost:8080/api-academia/v1/aulas');
    const [ aulas, setAulas ] = useState([]);

    useEffect(() => {
        setAulas( dataAulas?.results );
    }, [dataAulas]);
    
    return (
        <GeneralContext.Provider value={{
            openModal, setOpenModal,
            alert, setAlert,
            materias, setMaterias,
            profesores, setProfesores,
            aulas, setAulas
        }}>
            { children }
        </GeneralContext.Provider>
    );
}