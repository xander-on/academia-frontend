import { useEffect, useMemo, useState } from "react";

export const useForm = ( initialForm = {}, formValidators = {} ) => {

    const [formState, setFormState] = useState(initialForm);
    const [ formErrors, setFormErrors ] = useState({});

    useEffect(() => {
        checkErrors();  
    },[ formState ]);


    const isFormValid = useMemo(() => {
        for ( const formValue of Object.keys( formErrors )) {
            if ( formErrors[formValue] !== null ) return false;
        }
        
        return true;
    },[formErrors]);


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log({name, value});
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }


    const checkErrors = () => {
        const formErrors = {};
    
        for (const formField of Object.keys(formValidators)) {
            const validations = formValidators[formField];
    
            for (
                const { validator, message = 'Error en este campo'} 
                of validations
            ) 
            {
                if (!validator(formState[formField])) {
                    formErrors[formField] = message;
                    break;
                } else {
                    formErrors[formField] = null;
                }
            }
        }
    
        setFormErrors(formErrors);
    };

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        formErrors,
        isFormValid
    }
}
