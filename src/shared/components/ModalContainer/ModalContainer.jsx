import ReactDOM from 'react-dom';
import './ModalContainer.css';
import { useContext } from 'react';
import { GeneralContext } from '../../../store/context';

export const ModalContainer = ({ 
    children, 
    openModal, 
    title,
}) => {
    
    const modalRoot = document.getElementById('modal');
    const context = useContext( GeneralContext );

    const onCancel = () => {
        context.setOpenModal(false);
    };

    if(!openModal) return (<></>);

    return ReactDOM.createPortal(

        <div className="modal-background">
            <div className="modal-container">

                <span 
                    className='btn-close-modal'
                    onClick={onCancel}
                > <i className="bi bi-x"></i> </span>

                <h2 className='title mb-3'> {title || 'No title'} </h2>

                <div className="modal-body">
                    {children}
                </div>

            </div>
        </div>,

        modalRoot
    );
}