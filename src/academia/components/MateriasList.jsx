import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../store/context";
import { useFetch } from "../../shared/hooks";
import { EmptyResults } from "../../shared/components";
import { Link } from "react-router-dom";
import { deleteMateria } from "../services";

export const MateriasList = () => {

    const { data } = useFetch('http://localhost:8080/api-academia/v1/materias');
    const [ materias, setMaterias ] = useState([]);
    const context = useContext( GeneralContext );

    useEffect(() => {
        setMaterias( data?.results );
    }, [data]);

    const onOpenModal = () => {
        context.setOpenModal( true );
    }

    return (
        <>
            <Link className="btn mb-3" to="/">
                <i className="bi bi-arrow-left-short"></i>
                Back to Menu
            </Link>

            <div className="card">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h4>Materias</h4>
                        <button onClick={ onOpenModal } className="btn btn-success">Agregar</button>
                    </div>
                </div>

                
                <div className="card-body">
                    
                    {
                        (materias?.length === 0)
                            ? <EmptyResults message="No hay materias registradas"/>
                            : <table className="col-12">
                                <thead>
                                    <tr className="border-bottom">
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        materias?.map( materia => 
                                            <MateriaItem 
                                                key={materia.idMateria} 
                                                materiaData={materia}
                                            />
                                        )
                                    }
                                </tbody>
                            </table>
                    }
                    
                </div>
            </div>
        </>
        
    );
    
}



const MateriaItem = ({ materiaData }) => {
    const { idMateria, name } = materiaData;

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
                    <Link to={`/materias/${idMateria}`} className="btn btn-primary my-2">Ver mas</Link>
                    <button onClick={ onDelete } className="btn btn-danger mx-2">
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </td>
            </tr>

        </>
    );
}