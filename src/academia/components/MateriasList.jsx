import { useContext }     from "react";
import { Link }           from "react-router-dom";
import { GeneralContext } from "../../store/context";
import { EmptyResults }   from "../../shared/components";
import { deleteMateria }  from "../services";

export const MateriasList = () => {

    const context = useContext( GeneralContext );

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
                        (context.materias?.length === 0)
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
                                        context.materias?.map( materia => 
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
                    <Link to={`/materias/${idMateria}`} className="btn btn-primary my-2">Ver más</Link>
                    <button onClick={ onDelete } className="btn btn-danger mx-2">
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </td>
            </tr>

        </>
    );
}