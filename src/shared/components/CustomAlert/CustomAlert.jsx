import { useContext } from 'react';
import './CustomAlert.css';
import { GeneralContext } from '../../../store/context';

export const CustomAlert = () => {
    
    const context = useContext( GeneralContext );

    const onCloseAlert = () => {
        context.setAlert({ open:false, message:'' });
    }

    return (
        <div
            className={`
                custom-alert alert alert-dismissible fade
                alert-${ context.alert.type }
                ${ context.alert.open?'show':'' }`
            }
            role="alert"
        >
            <h5>
                <strong>{ context.alert.message }</strong>
            </h5>
            
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={ onCloseAlert }
            ></button>
        </div>
    );
}



