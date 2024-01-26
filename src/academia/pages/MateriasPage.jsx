import { useContext }    from "react";
import { GeneralLayout } from "../../shared/Layout/GeneralLayout"
import { FormAddMateria, GeneralList } from "../components"
import { GeneralContext } from "../../store/context";
import { deleteRegister } from "../services";
import { Link }           from "react-router-dom";
import { urlsAPI }        from "../../config/urlsAPI";



export const MateriasPage = () => {
    
    const context = useContext( GeneralContext );
    const infoList = { 
        title: 'Materias', 
        listHeaders: ["ID", "Nombre"] 
    }

    return (
        <GeneralLayout>
            <GeneralList 
                infoList={ infoList }
                registros={ context.materias }
            >
                <MateriaItem />
            </GeneralList>
            <FormAddMateria />
        </GeneralLayout>
    )
}


const MateriaItem = ({ registro }) => {
    
    const { id, name } = registro;

    const onDelete = () => {
        deleteRegister( `${urlsAPI.deleteMaterias}/${id}` );
        window.location.reload();
    }
    
    return (
        <tr className="border-bottom">
            <td>{id}</td>
            <td>{name}</td>
            
            <td>
                <Link to={`/materias/${id}`} className="btn btn-primary my-2">
                    Ver más
                </Link>
                <button onClick={ onDelete } className="btn btn-danger mx-2">
                    <i className="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>

    );
}