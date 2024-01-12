


export const postProfesor = async(body) => {
    const url = 'http://localhost:8080/api-academia/v1/profesores';

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
    }


    try{
        const resp = await fetch(url, options);
        const data = await resp.json();
        console.log( data )
        return data;

    }catch( error ){
        return { errorMessage: error.message }
    }
}



export const deleteProfesor = async(id) => {
    const url = `http://localhost:8080/api-academia/v1/profesores/${id}`;
    const options = {
        method: 'DELETE'
    }

    try{
        const resp = await fetch(url, options);
        const data = await resp.json();
        return data;

    }catch( error ){
        return { errorMessage: error.message }
    }
}