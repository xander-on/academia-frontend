


export const postAula = async ( body ) => {

    const url = 'http://localhost:8080/api-academia/v1/aulas';

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
        
        return {
            ok: true,
            response: data
        }

    }catch( error ){
        return { ok:false, errorMessage: error.message }
    }
}