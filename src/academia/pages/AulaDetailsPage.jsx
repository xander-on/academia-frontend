import { useContext } from "react";
import { GeneralDetailsPage } from "./";
import { GeneralContext } from "../../store/context";

export const AulaDetailsPage = () => {
    return (
        <GeneralDetailsPage 
            //todo quitar url llamar info del context no peticion
            url="http://localhost:8080/api-academia/v1/aulas"
        >
            <AulaCardDetails />
        </GeneralDetailsPage> 
    );
}


export const AulaCardDetails = ({ info:aula }) => {

    const context = useContext( GeneralContext );

    if( !aula ) return;

    const aulaContextSearched = context.aulas.find( (aulaContext ) => aula.id === aulaContext.id );

    if(!aulaContextSearched) return;

    const { id, code, date, time, theme, course, teacher } = aulaContextSearched;

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