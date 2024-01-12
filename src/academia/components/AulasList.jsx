

import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../store/context";
import { useFetch }       from "../../shared/hooks";
import { EmptyResults }   from "../../shared/components";
import { Link } from "react-router-dom";

export const AulasList = () => {

    const { data } = useFetch('http://localhost:8080/api-academia/v1/aulas');
    const [ aulas, setAulas ] = useState([]);
    const context = useContext( GeneralContext );

    useEffect(() => {
        setAulas( data?.results );
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
                        <h4>Aulas</h4>
                        <button onClick={ onOpenModal } className="btn btn-success">Agregar</button>
                    </div>
                </div>

                
                <div className="card-body">
                    
                    {
                        (aulas?.length === 0)
                            ? <EmptyResults message="No hay materias registradas"/>
                            : <table className="col-12">
                                <thead>
                                    <tr className="border-bottom">
                                        <th>Cod. Aula</th>
                                        <th>Fecha</th>
                                        <th>Hora</th>
                                        <th>Materia</th>
                                        <th>Profesor</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        aulas?.map( aula => 
                                            <AulaItem 
                                                key={aula.idAula} 
                                                aulaData={aula}
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



const AulaItem = ({ aulaData }) => {
    const { idAula ,codigo, date, time, materia, profesor } = aulaData;
    return (
        <>
            <tr className="border-bottom">
                <td>{codigo}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{materia?.name}</td>
                <td>{profesor?.name}</td>
                
                <td>
                    <Link to={`/aulas/${idAula}`} className="btn btn-primary my-2">Ver mas</Link>
                </td>
            </tr>

        </>
    );
}