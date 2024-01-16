import { useState } from "react";



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

    const handleInputChange = (e) => {
        setIsDirty(true); // Marca el campo como "dirty"
        onInputChange(e); // Pasa el evento al controlador de cambio externo si es necesario
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
                isDirty && errorMessage && 
                <small className="text-danger mx-2">
                    { errorMessage}
                </small>
            }
        </div>
    )
}
