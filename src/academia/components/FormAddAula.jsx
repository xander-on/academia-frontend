
import { useContext, useState } from 'react';
import { ModalContainer }       from '/src/shared/components';
import { GeneralContext }       from '../../store/context';
import { useForm }              from '../../shared/hooks';
import { postAula, registerPost }             from '../services';
import { urlsAPI } from '../../config';


export const FormAddAula = () => {
    const context = useContext( GeneralContext );
    const [ errorsForm, setErrorsForm ] = useState([]);

    const formValidations = {
        codigo   : [ ( value ) => value.length >0, 'El codigo es obligatorio' ],
        date     : [ ( value ) => value.length >0, 'La fecha es obligatorio' ],
        time     : [ ( value ) => value.length >0, 'La hora es obligatorio' ],
        theme    : [ ( value ) => value.length >0, 'El tema es obligatorio' ],
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
        isFormValid
    } = useForm(initialForm, formValidations );

    const onSubmit = async( event ) => {
        event.preventDefault();

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
                <div className='form-group mb-3'>
                    <label htmlFor="">Codigo: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Codigo"
                        name='codigo'
                        value   ={ codigo }
                        onChange={ onInputChange }
                    />
                </div>

                <div className='form-group mb-3 row'>

                    <div className='col-6'>
                        <label htmlFor="">Fecha: </label>
                        <input 
                            className="form-control" 
                            type="date" 
                            placeholder="Fecha"
                            name='date'
                            pattern="\d{4}-\d{2}-\d{2}"
                            value   ={ date }
                            onChange={ onInputChange }
                        />
                    </div>
                    

                    <div className='col-6'>
                        <label htmlFor="">Hora: </label>
                        <input 
                            className="form-control" 
                            type="time" 
                            placeholder="Hora"
                            name='time'
                            value   ={ time }
                            onChange={ onInputChange }
                        />
                    </div>
                </div>

                <div className='form-group mb-3'>
                    <label htmlFor="">Tema: </label>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Tema"
                        name='theme'
                        value   ={ theme }
                        onChange={ onInputChange }
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="">Materia: </label>
                    <select 
                        name="materia" 
                        className="form-control" 
                        id="" 
                        value={materia}
                        onChange={ onInputChange }
                    >
                        <option value="">--Selecciona una materia--</option>
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
