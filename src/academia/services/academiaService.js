
export const getRegisterById = async ( urlId ) => {
    try{
        const resp = await fetch(urlId);
        const data = await resp.json();
        
        return {
            ok: true,
            response: data
        }

    }catch( error ){
        return { ok:false, errorMessage: error.message }
    }
}


export const postRegister = async ( url, body ) => {

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

        const { ok, errors, results } = data; 
        
        return {
            ok      : ok,
            errors  : errors || [],
            results : results || null,
        };

    }catch( error ){
        return { 
            ok:false, 
            errorMessage: error.message,
        }
    }
}



export const deleteRegister = async( urlId ) => {

    const options = {
        method: 'DELETE'
    }

    try{
        const resp = await fetch(urlId, options);
        const data = await resp.json();
        return data;

    }catch( error ){
        return { errorMessage: error.message }
    }
}