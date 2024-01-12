import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../shared/hooks";
import { GeneralLayout } from "../../shared/Layout";
import { EmptyResults } from "../../shared/components";

export const AulaDetailsPage = () => {

    const { id }   = useParams();
    // const navigate = useNavigate();
    const { data } = useFetch(`http://localhost:8080/api-academia/v1/aulas/${id}`);
    const aula = data?.results[0];

    return (
        <GeneralLayout>
            <Link className="btn" to="/aulas">
                <i className="bi bi-arrow-left-short"></i>
                Back to List
            </Link>

            <div className="col-8 offset-2">
                { 
                    ( data?.results.length === 0 ) 
                        ? (<EmptyResults message="No se encontro un profesor con ese ID"/>)
                        :  <CardDetailsAulas aula={aula}/>
                }
                
            </div>
        </GeneralLayout>
    );
}


export const CardDetailsAulas = ({ aula }) => {

    return (
        <div className="card">
            <div className="card-header">
                <h4>Detalles de la materia</h4>
            </div>
            <div className="card-body">
                <div><strong>ID:</strong> { aula?.idAula }</div>
                <br />
                <div><strong>cod. Aula:</strong> { aula?.codigo }</div>

                <br />
                <div><strong>Fecha:</strong> { aula?.date }</div>

                <br />
                <div><strong>Hora:</strong> { aula?.time }</div>

                <br />
                <div><strong>Tema:</strong> { aula?.theme }</div>

                <br />
                <div><strong>Materia:</strong> { aula?.materia?.name }</div>

                <br />
                <div><strong>Profesor:</strong> { aula?.profesor?.name }</div>
            </div>
        </div>
    );
}