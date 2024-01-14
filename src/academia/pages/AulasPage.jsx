import { useContext }               from "react";
import { GeneralLayout }            from "../../shared/Layout";
import { FormAddAula, GeneralList } from "../components";
import { GeneralContext } from "../../store/context";
import { deleteAula }     from "../services";
import { Link }           from "react-router-dom";

export const AulasPage = () => {

    const context = useContext( GeneralContext );
    const infoList = { 
        title: 'Profesores', 
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
    const { idAula ,codigo, date, time, materia, profesor } = registro;

    const onDelete = () => {
        deleteAula( idAula );
        window.location.reload();
    }
    return (
        <>
            <tr className="border-bottom">
                <td>{codigo}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{materia?.name}</td>
                <td>{profesor?.name}</td>
                
                <td>
                    <Link to={`/aulas/${idAula}`} className="btn btn-primary my-2">Ver más</Link>
                    <button onClick={ onDelete } className="btn btn-danger mx-2">
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </td>
            </tr>

        </>
    );
}