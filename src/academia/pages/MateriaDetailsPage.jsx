import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../shared/hooks";
import { GeneralLayout } from "../../shared/Layout";
import { EmptyResults } from "../../shared/components";



export const MateriaDetailsPage = () => {

    const { id }   = useParams();
    // const navigate = useNavigate();
    const { data } = useFetch(`http://localhost:8080/api-academia/v1/materias/${id}`);
    const materia = data?.results[0];

    return (
        <GeneralLayout>
            <Link className="btn" to="/materias">
                <i className="bi bi-arrow-left-short"></i>
                Back to List
            </Link>

            <div className="col-8 offset-2">
                { 
                    ( data?.results.length === 0 ) 
                        ? (<EmptyResults message="No se encontro un profesor con ese ID"/>)
                        :  <CardDetailsMateria materia={materia}/>
                }
                
            </div>
        </GeneralLayout>
    );
}



export const CardDetailsMateria = ({ materia }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Detalles de la materia</h4>
            </div>
            <div className="card-body">
                <div><strong>ID:</strong> { materia?.idMateria }</div>
                <br />
                <div><strong>Nombre:</strong> { materia?.name }</div>
            </div>
        </div>
    );
}