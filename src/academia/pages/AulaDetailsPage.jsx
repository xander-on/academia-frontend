import { GeneralDetailsPage } from "./";

export const AulaDetailsPage = () => {
    return (
        <GeneralDetailsPage 
            url="http://localhost:8080/api-academia/v1/aulas"
        >
            <AulaCardDetails />
        </GeneralDetailsPage> 
    );
}


export const AulaCardDetails = ({ info:aula }) => {

    if( !aula ) return;
    const { idAula, codigo, date, time, theme, materia, profesor } = aula;

    const fieldsCard = [
        { label: 'ID',        value: idAula },
        { label: 'cod. Aula', value: codigo },
        { label: 'Fecha',     value: date },
        { label: 'Hora',      value: time },
        { label: 'Tema',      value: theme },
        { label: 'Materia',   value: materia?.name },
        { label: 'Profesor',  value: profesor?.name },
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