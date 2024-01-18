import { useContext, useState }     from 'react';
import { ModalContainer } from '/src/shared/components';
import { GeneralContext } from '../../store/context';
import { useForm }        from '../../shared/hooks';
import { urlsAPI }        from "/src/config/urlsAPI";
import { BackendErrors, InputForm }      from './';
import { isEmail, isOnlyNumbers, isOnlyText } from '../../shared/helpers';
import { submitRegister } from '../helpers/submitRegister';

const formValidators = {
    ci   : [ 
        {
            validator: ( value ) => value?.length == 10, 
            message: 'El DNI debe tener 10 caracteres'
        },
        {
            validator: ( value ) => isOnlyNumbers(value), 
            message: 'El DNI debe contener solo numeros'
        }
    ],

    name  : [ 
        {
            validator:( value ) =>  isOnlyText(value), 
            message:'El nombre debe ser solo texto'
        }
    ],
    
    email : [ 
        {
            validator:( value ) => isEmail(value), 
            message:'Debe ser um email valido ej: user@domain.com' 
        }
    ],
}

export const FormAddProfesor = () => {

    const context = useContext( GeneralContext );
    const [ backendErrors, setBackendErrors ] = useState(null);


    const { 
        ci, name, email, 
        formErrors, isFormValid,
        onInputChange, onResetForm 
    } = useForm({ci:'', name:'', email:''}, formValidators);

    const onSubmit = async( event ) => {
        event.preventDefault();

        const { errors } = await submitRegister({
            onResetForm, context, isFormValid, 
            urlAPI: urlsAPI.postProfesores, 
            registerBody: { ci, name, email }
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
            title     = {'Agrega un nuevo Profesor'}
        >
            <form onSubmit={ onSubmit }>

                <InputForm 
                    dataInput = {{
                        label: 'Numero de cedula:',
                        placeholder: 'C.I.', 
                        name: 'ci', 
                        value: ci,
                        required: true,
                        onInputChange: onInputChange, 
                        errorMessage:formErrors.ci
                    }}
                />

                <InputForm 
                    dataInput = {{
                        label: 'Nombre:',
                        placeholder: 'Nombre del profesor', 
                        name: 'name', 
                        value: name,
                        required: true,
                        onInputChange: onInputChange, 
                        errorMessage:formErrors.name
                    }}
                />

                <InputForm 
                    dataInput = {{
                        label: 'Email:',
                        placeholder: 'Email del profesor', 
                        name: 'email', 
                        value: email,
                        required: true,
                        onInputChange: onInputChange, 
                        errorMessage:formErrors.email
                    }}
                />

                <BackendErrors backendErrors={ backendErrors } />
                

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
                        Guardar
                    </button>
                </div>
            </form>
        </ModalContainer>
    );
}
