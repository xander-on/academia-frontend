import { useContext, useState } from 'react';
import { ModalContainer } from '/src/shared/components';
import { GeneralContext } from '../../store/context';
import { useForm } from '../../shared/hooks';
import { registerPost } from '../services';
import { urlsAPI } from "/src/config/urlsAPI";

export const FormAddProfesor = () => {

    const context = useContext( GeneralContext );
    const [ errorsForm, setErrorsForm ] = useState([]);

    const { ci, name, email, onInputChange, onResetForm } = useForm({
        ci    :'', 
        name  : '',
        email : '',
    });

    const onSubmit = async( event ) => {
        event.preventDefault();
        const responsePostProfesor = await registerPost(
            urlsAPI.postProfesores, 
            { ci, name, email }
        );

        const { ok, errors } = responsePostProfesor;
        console.log( responsePostProfesor );

        if( !ok ) {
            setErrorsForm( errors ); 
            return;
        }
        
        context.setOpenModal(false);
        onResetForm();

        context.setAlert({ 
            open:true, 
            message:'✅ Profesor agregado', 
            type:'success' 
        });
        
        window.location.reload();
    }

    const onCancel = () => {
        context.setOpenModal(false);
        setErrorsForm([]);
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

                {
                    (errorsForm?.length > 0) &&
                    <div className='alert alert-danger'>
                        <ul>
                            {  errorsForm?.map( error => <li key={ error }>{ error }</li> ) }
                        </ul>
                    </div>
                }
                

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
