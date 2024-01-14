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

    return (
        <div className="card">
            <div className="card-header">
                <h4>Detalles del Profesor</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <img src={profesor?.photo} alt="" className="w-100"/>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-center px-5">
                        <div><strong>ID:</strong> { profesor?.idProfesor }</div>
                        <br />
                        <div><strong>C.I:</strong> { profesor?.ci }</div>
                        <br />
                        <div><strong>Nombre:</strong> { profesor?.name }</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
