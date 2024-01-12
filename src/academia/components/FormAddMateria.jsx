import { useContext, useState } from 'react';
import { ModalContainer } from '/src/shared/components';
import { GeneralContext } from '../../store/context';
import { useForm } from '../../shared/hooks';
import { postMateria } from '../services';

export const FormAddMateria = () => {

    const context = useContext( GeneralContext );
    const [ errorsForm, setErrorsForm ] = useState([]);

    const formValidations = {
        name   : [ ( value ) => value.length >= 3, 'El nombre es obligatorio' ],
    }

    const { name, onInputChange, onResetForm, isFormValid } = useForm({name : ''}, formValidations );

    const onSubmit = async( event ) => {
        event.preventDefault();
        await postMateria({ name });

        context.setOpenModal(false);
        window.location.reload();

        context.setAlert({ 
            open:true, 
            message:'✅ Materia agregada', 
            type:'success' 
        });
        onResetForm();
    }

    const onCancel = () => {
        context.setOpenModal(false);
        setErrorsForm([]);
        onResetForm();
    }
    
    return (

        <ModalContainer 
            openModal = { context.openModal } 
            title     = {'Agrega una nueva Materia'}
        >
            <form onSubmit={ onSubmit }>
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


                <div className="form-group d-flex justify-content-end">
                    <button 
                        onClick={ onCancel } 
                        className="btn btn-danger mx-2"
                    >Cancelar</button>

                    <button 
                        disabled={ !isFormValid }
                        className="btn btn-success" 
                        type='submit'
                    >Guardar</button>
                </div>
            </form>
        </ModalContainer>
        
    );
}
