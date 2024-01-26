import { useContext }      from "react";
import { GeneralLayout }   from "../../shared/Layout";
import { GeneralList }     from "../components";
import { FormAddProfesor } from "../components/FormAddProfesor";
import { GeneralContext }  from "../../store/context";
import { deleteRegister }  from "../services";
import { Link }            from "react-router-dom";
import { urlsAPI } from "../../config/urlsAPI";



export const ProfesoresPage = () => {

    const context = useContext( GeneralContext );
    const infoList = { 
        title: 'Profesores', 
        listHeaders: ["ID", "Name", "Email"] 
    }

    return (
        <GeneralLayout>
            <GeneralList
                infoList={ infoList }
                registros={ context.profesores }
            >
                <ProfesorItem />
            </GeneralList>
            <FormAddProfesor />
        </GeneralLayout>
    );
}



const ProfesorItem = ({ registro }) => {

    const { id, name, email } = registro;

    const onDelete = () => {
        const urlDeleteProfesor = urlsAPI.deleteProfesores + `/${id}`
        deleteRegister( urlDeleteProfesor );
        window.location.reload();
    }

    return (
        <tr className="border-bottom">
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            
            <td>
                <Link to={`/profesores/${id}`} className="btn btn-primary my-2">
                    Ver más
                </Link>
                <button onClick={ onDelete } className="btn btn-danger mx-2">
                    <i className="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>
    );
}