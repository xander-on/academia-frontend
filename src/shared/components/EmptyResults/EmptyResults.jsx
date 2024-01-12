
export const EmptyResults = ({ message='' }) => {
    return (
        <>  
            <div style={{ textAlign: 'center', color: 'black' }}>
                <i className="bi bi-cone-striped" style={{ fontSize: '125px' }}></i>
                <p style={{ fontSize: '25px' }}>{ message }</p>
            </div>
        </>
        
    );
}