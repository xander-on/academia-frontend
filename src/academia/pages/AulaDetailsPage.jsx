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