import { useContext }               from "react";
import { GeneralLayout }            from "../../shared/Layout";
import { FormAddAula, GeneralList } from "../components";
import { GeneralContext } from "../../store/context";
import { deleteRegister } from "../services";
import { Link }           from "react-router-dom";
import { urlsAPI }        from "../../config/urlsAPI";

export const AulasPage = () => {

    const context = useContext( GeneralContext );
    const infoList = { 
        title: 'Materias', 
        listHeaders: ["Cod. Aula", "Fecha", "Hora", "Materia", "Profesor"] 
    }

    return (
        <GeneralLayout>
            <GeneralList
                infoList={ infoList }
                registros={ context.aulas }
            >
                <AulaItem />
            </GeneralList>
            <FormAddAula/>
        </GeneralLayout>
    );
}


const AulaItem = ({ registro }) => {
    const { id, code, date, time, course, teacher } = registro;

    const onDelete = () => {
        deleteRegister(`${urlsAPI.deleteAulas}/${id}` );
        window.location.reload();
    }
    return (
        <>
            <tr className="border-bottom">
                <td>{code}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{course}</td>
                <td>{teacher}</td>
                
                <td>
                    <Link to={`/aulas/${id}`} className="btn btn-primary my-2">
                        Ver más
                    </Link>
                    <button onClick={ onDelete } className="btn btn-danger mx-2">
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </td>
            </tr>

        </>
    );
}