import { useContext } from "react";
import { GeneralDetailsPage } from "./GeneralDetailsPage";
import { GeneralContext } from "../../store/context";
import { useParams } from "react-router-dom";
import { searchDataById } from "../helpers";
import { EmptyResults } from "../../shared/components";


export const MateriaDetailsPage = () => {
    const { id }   = useParams();
    const context  = useContext( GeneralContext );
    const materia = searchDataById( context.materias, id );

    return (
        <GeneralDetailsPage>
            { !materia && 
                <EmptyResults message="No se encontro una materia con ese ID"/>
            }
            <MateriaDetailsCard materia={materia}/>
        </GeneralDetailsPage> 
    );
}


export const MateriaDetailsCard = ({ materia }) => {

    if( !materia ) return;
    const { id, name } = materia;

    const fieldsCard = [
        { label: 'ID',     value: id },
        { label: 'Nombre', value: name },
    ];
        
    return (
        <div className="card">
            <div className="card-header">
                <h4>Detalles de la materia</h4>
            </div>
            <div className="card-body">
                {
                    fieldsCard.map( (field, index) => 
                        <div key={index} className="mb-3">
                            <strong>{field.label}:</strong> { field.value }
                        </div>
                    )
                }
            </div>
        </div>
    );
}