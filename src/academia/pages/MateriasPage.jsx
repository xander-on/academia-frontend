import { useContext } from "react";
import { GeneralLayout } from "../../shared/Layout/GeneralLayout"
import { FormAddMateria, GeneralList } from "../components"
import { GeneralContext } from "../../store/context";
import { deleteMateria } from "../services";
import { Link } from "react-router-dom";



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
    
    const { idMateria, name } = registro;

    const onDelete = () => {
        deleteMateria( idMateria );
        window.location.reload();
    }
    return (
        <>
            <tr className="border-bottom">
                <td>{idMateria}</td>
                <td>{name}</td>
                
                <td>
                    <Link to={`/materias/${idMateria}`} className="btn btn-primary my-2">Ver más</Link>
                    <button onClick={ onDelete } className="btn btn-danger mx-2">
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </td>
            </tr>

        </>
    );
}