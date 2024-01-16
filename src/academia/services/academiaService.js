


export const registerPost = async ( url, body ) => {

    console.log(body);
    console.log(url)

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
        // console.log( errors )
        
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



//todo delete