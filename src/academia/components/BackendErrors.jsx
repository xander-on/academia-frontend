
export const BackendErrors = ({ backendErrors }) => {
    return (
        <>
            {
                (backendErrors) && 
                <div className='alert alert-danger'>
                    <ul className="mb-0">
                        {  backendErrors?.map( error => 
                            <li key={ error }>{ error }</li> 
                        ) }
                    </ul>
                </div>
            }
        </>
    )
}
