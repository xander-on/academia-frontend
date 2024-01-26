import { useContext }         from "react";
import { GeneralContext }     from "../../store/context";
import { GeneralDetailsPage } from "./GeneralDetailsPage";
import { searchDataById }     from "../helpers";
import { useParams }          from "react-router-dom";
import { EmptyResults }       from "../../shared/components";

export const ProfesorDetailsPage = () => {
    const { id }   = useParams();
    const context  = useContext( GeneralContext );
    const profesor = searchDataById( context.profesores, id );

    return (
        <GeneralDetailsPage>
            { !profesor && 
                <EmptyResults message="No se encontro un profesor con ese ID"/>
            }
            <ProfesorDetailsCard profesor={profesor}/>
        </GeneralDetailsPage>
    );
}


export const ProfesorDetailsCard = ({profesor}) => {

    if(!profesor) return
    const { id, dni, name, photo } = profesor;

    const fieldsCard = [
        { label: 'ID',     value: id },
        { label: 'C.I',    value: dni },
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
                        <img 
                            src={ photo ?photo :'/src/assets/images/no-avatar.png' } 
                            alt="" 
                            className="w-100"
                        />
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-center px-5">
                        {
                            fieldsCard.map( (field, index) => 
                                <div key={index} className="mb-3">
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