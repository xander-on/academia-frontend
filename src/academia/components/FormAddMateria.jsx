import { useContext, useState }     from 'react';
import { ModalContainer } from '/src/shared/components';
import { GeneralContext } from '../../store/context';
import { useForm }        from '../../shared/hooks';
import { urlsAPI }        from "/src/config/urlsAPI";
import { InputForm }      from './InputForm';
import { submitRegister } from '../helpers/submitRegister';
import { BackendErrors } from './';


const formValidations = {
    name : [ 
        {
            validator:( value ) => value.length > 3, 
            message: 'Debe contener 4 o mas caracteres'
        }
    ],
}

export const FormAddMateria = () => {

    const context = useContext( GeneralContext );
    const [ backendErrors, setBackendErrors ] = useState(null);

    const { 
        name, 
        onInputChange, 
        onResetForm, 
        isFormValid , formErrors
    } = useForm({name : ''}, formValidations );

    const onSubmit = async( event ) => {
        event.preventDefault();

        const { errors } = await submitRegister({
            onResetForm, context, isFormValid, 
            urlAPI: urlsAPI.postMaterias, 
            registerBody: { name }
        });

        setBackendErrors(errors);
    }

    const onCancel = () => {
        context.setOpenModal(false);
        setBackendErrors(null);
        onResetForm();
    }
    
    return (

        <ModalContainer 
            openModal = { context.openModal } 
            title     = {'Agrega una nueva Materia'}
        >
            <form onSubmit={ onSubmit }>

                <InputForm 
                    dataInput = {{
                        label: 'Nombre:',
                        placeholder: 'Nombre de la materia', 
                        name: 'name', 
                        value: name,
                        required: true,
                        onInputChange: onInputChange, 
                        errorMessage:formErrors.name
                    }}
                />

                <BackendErrors backendErrors={ backendErrors }/>

                <div className="form-group d-flex justify-content-end">
                    <button 
                        onClick={ onCancel } 
                        className="btn btn-danger mx-2"
                    >Cancelar</button>

                    <button 
                        disabled={ !isFormValid }
                        className="btn btn-success" 
                        type='submit'
                    >
                        <i className="bi bi-floppy-fill"/>
                        <span className="mx-1"/>
                        Guardar
                    </button>
                </div>
            </form>
        </ModalContainer>
        
    );
}
