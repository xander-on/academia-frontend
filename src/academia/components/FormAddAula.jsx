
import { useContext, useState }     from 'react';
import { ModalContainer } from '/src/shared/components';
import { GeneralContext } from '../../store/context';
import { useForm }        from '../../shared/hooks';
import { urlsAPI }        from '/src/config';
import { BackendErrors, InputForm }      from './';
import { submitRegister } from '../helpers';

// si el campo es requerido enviar el prop required en el input
const formValidators = {
    codigo   : [ 
        {
            validator: ( value ) => value.length >3, 
            message:'El codigo debe tener al menos 4 '
        },  
    ],

    date   : [ 
        {
            validator: ( value ) => value.length >0, 
            message:'La fecha es obligatoria'
        },  
    ],

    materia  : [ 
        {
            validator: ( value ) => value != '',  
            message:'La materia es obligatorio'
        }
    ],
    profesor : [ 
        {
            validator: ( value ) => value != '',
            message:'El profesor es obligatorio'
        } 
    ],
}


export const FormAddAula = () => {
    const context = useContext( GeneralContext );
    const [ backendErrors, setBackendErrors ] = useState(null);
    
    const initialForm = {
        codigo: '',
        date  : '',
        time  : '',
        theme : '',
        materia: '',
        profesor: '',
    }

    const { 
        codigo, date, time, theme, materia, profesor,
        onInputChange, 
        onResetForm, 
        formErrors,
        isFormValid
    } = useForm(initialForm, formValidators );

    const onSubmit = async( event ) => {
        event.preventDefault();
        

        const aulaToPost = { 
            codigo, date, time, theme, 
            materia:{ idMateria:materia }, 
            profesor:{ idProfesor:profesor } 
        }

        const { errors } = await submitRegister({
            onResetForm, context, isFormValid, 
            urlAPI: urlsAPI.postAulas, 
            registerBody: aulaToPost
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
            title     = {'Agregar aula'}
        >
            <form onSubmit={ onSubmit }>

                <InputForm 
                    dataInput = {{
                        label: 'Cod. Aula',
                        placeholder: 'Codigo', 
                        name: 'codigo', 
                        value: codigo,
                        required: true,
                        onInputChange: onInputChange, 
                        errorMessage:formErrors.codigo
                    }}
                />

                <div className='row'>
                    <InputForm 
                        dataInput = {{
                            small:true,
                            type: 'date',
                            label: 'Fecha',
                            // placeholder: 'xx/xx/xxxx', 
                            name: 'date', 
                            value: date,
                            // pattern="\d{4}-\d{2}-\d{2}",
                            required: true,
                            onInputChange: onInputChange,
                            errorMessage:formErrors.date
                        }}
                    />


                    <InputForm 
                        dataInput = {{
                            small:true,
                            type: 'time',
                            label: 'Hora:',
                            name: 'time', 
                            value: time,
                            required: true,
                            onInputChange: onInputChange,
                            errorMessage:formErrors.time
                        }}
                    />

                </div>
                
                <InputForm 
                    dataInput = {{
                        label: 'Tema:',
                        placeholder: 'Tema', 
                        name: 'theme', 
                        value: theme,
                        onInputChange: onInputChange
                    }}
                />

                <div className="form-group mb-3">
                    <label htmlFor="">Materia: </label>
                    <select 
                        name="materia" 
                        className="form-control" 
                        id="" 
                        value={materia}
                        onChange={ onInputChange }
                    >
                        <option disabled value="">
                            --Selecciona una materia--
                        </option>
                        { 
                            context.materias?.map( materia => 
                                <option 
                                    key={ materia.id } 
                                    value={ materia.id }>
                                        { materia.name }
                                </option>)
                        }
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="">Profesor: </label>
                    <select 
                        name="profesor" 
                        className="form-control" 
                        id=""
                        value={profesor}
                        onChange={ onInputChange }
                    >
                        <option value="">
                            --Selecciona un profesor--
                        </option>
                        { 
                            context.profesores?.map( profesor => 
                                <option 
                                    key={ profesor.id } 
                                    value={ profesor.id }
                                >
                                        { profesor.name }
                                </option>
                            )
                        }
                    </select>
                </div>

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
                        <i className="bi bi-floppy-fill"/>
                        <span className="mx-1"/>
                        Guardar
                    </button>
                </div>

            </form>
        </ModalContainer>
    );
}
