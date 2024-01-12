import { useContext, useState } from 'react';
import { ModalContainer } from '/src/shared/components';
import { GeneralContext } from '../../store/context';
import { useForm } from '../../shared/hooks';
import { postProfesor } from '../services';

export const FormAddProfesor = () => {

    const context = useContext( GeneralContext );
    const [ errorsForm, setErrorsForm ] = useState([]);

    const { ci, name, email, onInputChange, onResetForm } = useForm({
        ci:'', 
        name  : '',
        email : '',
    });

    const onSubmit = async( event ) => {
        event.preventDefault();
        const addProfesor = await postProfesor({ ci, name, email });

        const { ok, errors } = addProfesor;

        if( !ok ){
            setErrorsForm( errors );
        }

        // context.setOpenModal(false);
    }

    const onCancel = () => {
        context.setOpenModal(false);
        onResetForm();
    }
    
    return (

        <ModalContainer 
            openModal = { context.openModal } 
            title     = {'Agrega un nuevo Profesor'}
        >
            <form onSubmit={ onSubmit }>

                <div className='form-group mb-3'>
                    <label htmlFor="">Numero de Cedula: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="C.I."
                        name='ci'
                        value   ={ ci }
                        onChange={ onInputChange }
                    />
                </div>

                <div className='form-group mb-3'>
                    <label htmlFor="">Nombre: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Nombre"
                        name='name'
                        value   ={ name }
                        onChange={ onInputChange }
                    />
                </div>

                <div className='form-group mb-3'>
                    <label htmlFor="">Email: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Email"
                        name='email'
                        value   ={ email }
                        onChange={ onInputChange }
                    />
                </div>

                <div className='alert alert-danger'>
                    <ul>
                        { errorsForm?.map( error => <li key={ error }>{ error }</li> ) }
                    </ul>
                </div>

                <div className="form-group d-flex justify-content-end">
                    <button 
                        onClick={ onCancel } 
                        className="btn btn-danger mx-2"
                    >Cancelar</button>

                    <button className="btn btn-success" type='submit'>Guardar</button>
                </div>
            </form>
        </ModalContainer>
            
        
    );
}
