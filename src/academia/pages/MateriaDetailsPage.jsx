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

    if( !materia ) return;
    const { idMateria, name } = materia;

    const fieldsCard = [
        { label: 'ID', value: idMateria },
        { label: 'Nombre', value: name },
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