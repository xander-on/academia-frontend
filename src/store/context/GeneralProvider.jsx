import { useEffect, useState } from "react";
import { GeneralContext } from "./GeneralContext";
import { useFetch }       from "../../shared/hooks";
import { urlsAPI }        from "/src/config/urlsAPI";

import { 
    aulaMapper, 
    materiaMapper, 
    profesorMapper 
} from "../../academia/mappers";

export const GeneralProvider = ({ children }) => {

    const alertServerError = { 
        open:true, 
        message:'👻 Ocurrio un problema en el servidor', 
        type:'danger' 
    }

    const alertInitial = { 
        open:false, 
        message: '', 
        type:'primary' 
    }

    const [ openModal, setOpenModal ] = useState(false);
    const [ alert, setAlert ] = useState(alertInitial);


    //cargar data materias backend
    const { 
        data:dataMaterias, 
        hasError:hasErrorMaterias,
        isLoading:isLoadingMaterias 
    } = useFetch(urlsAPI.getMaterias);

    const [ materias, setMaterias ] = useState([]);

    useEffect(() => {
        if( hasErrorMaterias ) setAlert( alertServerError );    

        const materiasMapped = dataMaterias?.results.map(materiaMapper);
        setMaterias( materiasMapped );
    }, [dataMaterias, hasErrorMaterias]);


    //cargar data profesores backend
    const { 
        data:dataProfesores, 
        hasError:hasErrorProfesores 
    } = useFetch(urlsAPI.getProfesores);

    const [ profesores, setProfesores ] = useState([]);

    useEffect(() => {
        if( hasErrorProfesores ) setAlert( alertServerError );
        const profesoresMapped = dataProfesores?.results.map(profesorMapper);
        setProfesores( profesoresMapped );
    }, [dataProfesores]);


    //cargar data aulas backend
    const { 
        data:dataAulas,
        hasError:hasErrorAulas
    } = useFetch(urlsAPI.getAulas);
    const [ aulas, setAulas ] = useState([]);

    useEffect(() => {
        if( hasErrorAulas ) setAlert( alertServerError );

        const dataAulasMapped = dataAulas?.results.map(aulaMapper);
        setAulas( dataAulasMapped );
    }, [dataAulas]);

    
    return (
        <GeneralContext.Provider value={{
            openModal, setOpenModal,
            alert, setAlert,
            materias, setMaterias,
            profesores, setProfesores,
            aulas, setAulas,
            urlsAPI,
            isLoadingMaterias
        }}>
            { children }
        </GeneralContext.Provider>
    );
}