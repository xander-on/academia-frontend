import { useEffect, useMemo, useState } from "react";

export const useForm = ( initialForm = {}, formValidators = {} ) => {

    const [formState, setFormState] = useState(initialForm);
    const [ formErrors, setFormErrors ] = useState({});

    useEffect(() => {
        checkErrors();  
        console.log( formErrors );  
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

        for (const formField of Object.keys( formValidators )) {
            const [ fn, errorMessage='Error en este campo' ] = formValidators[ formField ];

            formErrors[`${ formField }`] = 
                fn( formState[ formField ] ) ? null : errorMessage;
        }

        setFormErrors( formErrors );
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        formErrors,
        isFormValid
    }
}
