import { cloneElement, useContext } from "react";
import { GeneralContext }       from "../../store/context";
import { EmptyResults, Loader } from "../../shared/components";
import { Link }                 from "react-router-dom";

export const GeneralList = ({ infoList, registros, children }) => {

    const { title, listHeaders } = infoList;
    
    const context = useContext( GeneralContext );
    const onOpenModal = () => context.setOpenModal( true );
        
    return (
        <>
            <Link className="btn mb-3" to="/">
                <i className="bi bi-arrow-left-short"></i>
                Back to Menu
            </Link>

            <div className="card">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h4>{ title }</h4>
                        <button 
                            onClick={ onOpenModal } 
                            className="btn btn-success"
                        >
                            Agregar
                        </button>
                    </div>
                </div>
                
                <div className="card-body"> 
                    { !registros && <Loader /> }

                    {
                        registros &&(registros?.length === 0)
                            ? <EmptyResults message="No hay materias registradas"/>
                            : <table className="col-12">
                                <thead>
                                    <tr className="border-bottom">
                                        {
                                            listHeaders?.map( header => <th key={header}>{ header }</th>)
                                        }
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        registros?.map( (registro, index) => 
                                            cloneElement( children, { key: index, info: registro, registro } ) 
                                        )
                                    }
                                </tbody>
                            </table>
                    }
                    
                </div>
            </div>
        </>
        
    );
    
}



