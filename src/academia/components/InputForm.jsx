


export const InputForm = ({ dataInput }) => {

    const {
        small=false,
        label = '',
        type = 'text', 
        placeholder = '', 
        name = '', 
        value = '', 
        required=false,
        onInputChange 
    } = dataInput;

    return (
        <div className={`form-group mb-3 ${small ? 'col-6' : 'col-12'}`}>
            <label htmlFor="">
                { required && <span className="text-danger" style={{ fontSize: '20px' }}>* </span> }
                {label}
            </label>
            <input 
                className="form-control" 
                type={ type } 
                placeholder={ placeholder }
                name={ name }
                value   ={ value }
                onChange={ onInputChange }
            />
        </div>
    )
}
