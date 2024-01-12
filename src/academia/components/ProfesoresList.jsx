import { useContext, useEffect, useState } from "react";
import { useFetch } from "../../shared/hooks";
import { GeneralContext } from "../../store/context";
import { Link } from "react-router-dom";
import { EmptyResults } from "../../shared/components";


export const ProfesoresList = () => {
    
    const { data } = useFetch('http://localhost:8080/api-academia/v1/profesores');
    const [ profesores, setProfesores ] = useState([]);

    useEffect(() => {
        setProfesores( data?.results );
    }, [data]);

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
                        <h4>Profesores</h4>
                        <button onClick={ onOpenModal } className="btn btn-success">Agregar</button>
                    </div>
                </div>

                
                <div className="card-body">

                    {
                        (profesores?.length === 0)
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
                                            profesores?.map( profesor => 
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
    return (
        <>
            <tr className="border-bottom">
                <td>{idProfesor}</td>
                <td>{name}</td>
                <td>{email}</td>
                
                <td>
                    <Link to={`/profesores/${idProfesor}`} className="btn btn-primary my-2">Ver mas</Link>
                </td>
            </tr>

        </>
    );
}