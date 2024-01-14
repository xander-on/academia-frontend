import { GeneralDetailsPage } from "./GeneralDetailsPage";


export const MateriaDetailsPage = () => {
    return (
        <GeneralDetailsPage 
            url="http://localhost:8080/api-academia/v1/materias"
        >
            <MateriaDetailsCard />
        </GeneralDetailsPage> 
    );
}



export const MateriaDetailsCard = ({ info: materia }) => {
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