// import { useMemo } from "react";
import { GeneralLayout } from "../../shared/Layout"
import { Link, useParams } from "react-router-dom";
import { useFetch }     from "../../shared/hooks";
import { EmptyResults } from "../../shared/components";

export const ProfesorDetailsPage = () => {
    const { id }   = useParams();
    // const navigate = useNavigate();
    const { data } = useFetch(`http://localhost:8080/api-academia/v1/profesores/${id}`);
    const profesor = data?.results[0];

    return (
        <GeneralLayout>
            <Link className="btn" to="/profesores">
                <i className="bi bi-arrow-left-short"></i>
                Back to List
            </Link>

            <div className="col-8 offset-2">
                { 
                    ( data?.results.length === 0 ) 
                        ? (<EmptyResults message="No se encontro un profesor con ese ID"/>)
                        :  <CardDetailsProfesor profesor={profesor}/>
                }
                
            </div>
        </GeneralLayout>
    );
}



export const CardDetailsProfesor = ({ profesor }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Detalles del Profesor</h4>
            </div>
            <div className="card-body">
                <div><strong>ID:</strong> { profesor?.idProfesor }</div>
                <br />
                <div><strong>C.I:</strong> { profesor?.ci }</div>
                <br />
                <div><strong>Nombre:</strong> { profesor?.name }</div>
            </div>
        </div>
    );
}
