import { GeneralDetailsPage } from "./GeneralDetailsPage";

export const ProfesorDetailsPage = () => {
    return (
        <GeneralDetailsPage 
            url="http://localhost:8080/api-academia/v1/profesores"
        >
            <ProfesorDetailsCard />
        </GeneralDetailsPage>
    );
}



export const ProfesorDetailsCard = ({ info:profesor }) => {

    if( !profesor ) return;
    const { idProfesor, ci, name, photo } = profesor;

    const fieldsCard = [
        { label: 'ID',     value: idProfesor },
        { label: 'C.I',    value: ci },
        { label: 'Nombre', value: name },
    ]

    return (
        <div className="card">
            <div className="card-header">
                <h4>Detalles del Profesor</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <img src={ photo } alt="" className="w-100"/>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-center px-5">
                        {
                            fieldsCard.map( (field, index) => 
                                <div key={index}>
                                    <strong>{field.label}:</strong> { field.value }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}