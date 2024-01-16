
import { useContext, useState } from 'react';
import { ModalContainer }       from '/src/shared/components';
import { GeneralContext }       from '../../store/context';
import { useForm }              from '../../shared/hooks';
import { registerPost } from '../services';
import { urlsAPI } from '/src/config';
import { InputForm } from './';


export const FormAddAula = () => {
    const context = useContext( GeneralContext );
    const [ errorsForm, setErrorsForm ] = useState([]);

    const formValidators = {
        codigo   : [ ( value ) => value.length >0, 'El codigo es obligatorio' ],
        date     : [ ( value ) => value.length >0, 'La fecha es obligatorio' ],
        time     : [ ( value ) => value.length >0, 'La hora es obligatorio' ],
        // theme    : [ ( value ) => value.length >0, 'El tema es obligatorio' ],
        materia  : [ ( value ) => value != '',     'La materia es obligatorio' ],
        profesor : [ ( value ) => value != '',     'El profesor es obligatorio' ],
    }
    
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
        console.log(formErrors);
        if( !isFormValid ) return;

        const aulaToPost = { 
            codigo, date, time, theme, 
            materia:{ idMateria:materia }, 
            profesor:{ idProfesor:profesor } 
        }

        const responsePostAula = await registerPost( urlsAPI.postAulas, aulaToPost );

        const { ok, errors } = responsePostAula;
        console.log( responsePostAula );

        if( !ok ) {
            setErrorsForm( errors ); 
            return;
        }
        
        context.setOpenModal(false);
        onResetForm();

        context.setAlert({ 
            open:true, 
            message:'✅ Aula agregada', 
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
                        <option disabled value="">--Selecciona una materia--</option>
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
                        <option value="">--Selecciona un profesor--</option>
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


                <div className="form-group d-flex justify-content-end">
                    <button 
                        onClick={ onCancel } 
                        className="btn btn-danger mx-2"
                    >Cancelar</button>

                    <button 
                        // disabled={ !isFormValid }
                        className="btn btn-success" 
                        type='submit'
                    >Guardar</button>
                </div>

            </form>
        </ModalContainer>
    );
}
