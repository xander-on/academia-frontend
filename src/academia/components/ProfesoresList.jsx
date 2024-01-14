import { useContext } from "react";
import { GeneralContext } from "../../store/context";
import { Link } from "react-router-dom";
import { EmptyResults } from "../../shared/components";
import { deleteProfesor } from "../services";


export const ProfesoresList = () => {
    
    const context = useContext( GeneralContext );

    const onOpenModal = () => context.setOpenModal( true );

    return (

        <>
            <Link className="btn mb-3" to="/">
                <i className="bi bi-arrow-left-short"></i>
                Back to Menu
            </Link>
        
            <div className="card">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h4>Profesores</h4>
                        <button onClick={ onOpenModal } className="btn btn-success">Agregar</button>
                    </div>
                </div>

                
                <div className="card-body">

                    {
                        ( context.profesores?.length === 0)
                            ? <EmptyResults message="No hay materias registradas"/>
                            :   <table className="col-12">
                                    <thead>
                                        <tr className="border-bottom">
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            context.profesores?.map( profesor => 
                                                <ProfesorItem 
                                                    key={profesor.idProfesor} 
                                                    profesorData={profesor}
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



const ProfesorItem = ({ profesorData }) => {
    const { idProfesor, name, email } = profesorData;

    const onDelete = () => {
        deleteProfesor( idProfesor );
        window.location.reload();
    }

    return (
        <>
            <tr className="border-bottom">
                <td>{idProfesor}</td>
                <td>{name}</td>
                <td>{email}</td>
                
                <td>
                    <Link to={`/profesores/${idProfesor}`} className="btn btn-primary my-2">Ver más</Link>
                    <button onClick={ onDelete } className="btn btn-danger mx-2">
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </td>
            </tr>

        </>
    );
}