import { useContext } from "react";
import { GeneralDetailsPage } from "./";
import { GeneralContext } from "../../store/context";
import { searchDataById } from "../helpers";
import { useParams }      from "react-router-dom";
import { EmptyResults }   from "../../shared/components";

export const AulaDetailsPage = () => {
    const { id }   = useParams();
    const context  = useContext( GeneralContext );
    const aula     = searchDataById( context.aulas, id );

    return (
        <GeneralDetailsPage>
            { !aula && 
                <EmptyResults message="No se encontro un aula con ese ID"/>
            }
            <AulaCardDetails aula={aula}/>
        </GeneralDetailsPage> 
    );
}


export const AulaCardDetails = ({ aula }) => {

    if( !aula ) return;
    const { id, code, date, time, theme, course, teacher } = aula;

    const fieldsCard = [
        { label: 'ID',        value: id },
        { label: 'cod. Aula', value: code },
        { label: 'Fecha',     value: date },
        { label: 'Hora',      value: time },
        { label: 'Tema',      value: theme },
        { label: 'Materia',   value: course },
        { label: 'Profesor',  value: teacher },
    ]

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