import { useEffect, useState } from "react";


export const InputForm = ({ dataInput }) => {

    const {
        small=false,
        label = '',
        type = 'text', 
        placeholder = '', 
        name = '', 
        value = '', 
        required=false,
        onInputChange,
        errorMessage = null 
    } = dataInput;

    const [isDirty, setIsDirty] = useState(false);
    const [ errors, setErrors ] = useState([]);


    useEffect(() => {
        (errorMessage && (required && !value)) 
            ?setErrors(["Este campo es requerido", errorMessage])
            : (required && !value) 
                ? setErrors(["Este campo es requerido"]) 
                : errorMessage 
                    ? setErrors([ errorMessage ])
                    : setErrors([]);

      }, [required, value, errorMessage]);

    const handleInputChange = (e) => {
        onInputChange(e); 

        setTimeout(() => {
            setIsDirty(true); 
        }, 500);
    };

    return (
        <div className={`form-group mb-3 ${small ? 'col-6' : 'col-12'}`}>
            <label htmlFor="">
                { required && <span className="text-danger" style={{ fontSize: '20px' }}>* </span> }
                {label}
            </label>
            <input 
                className="form-control" 
                type     ={ type } 
                placeholder={ placeholder }
                name    ={ name }
                value   ={ value }
                onChange={ handleInputChange }
            />
            {   
                isDirty && errors && 
                <div>
                    {
                        errors.map( (error, index) =>
                            <small 
                                className="text-danger mx-2 d-block" 
                                key={index}
                            >{ error }</small> 
                        )
                    }
                </div>
            }
        </div>
    )
}
