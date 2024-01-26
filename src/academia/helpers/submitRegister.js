import { postRegister }   from '../services';


export const submitRegister = async(
    { onResetForm, context, isFormValid, urlAPI, registerBody }
) =>{
    
    if( !isFormValid ) return{errors:null};
    //todo lanzar errores en inputs

    const responsePost = await postRegister( urlAPI, registerBody );

    // console.log( responsePost );
    const { ok } = responsePost;
    if( !ok ) return { errors : responsePost.errors};

    //
    context.setOpenModal(false);
    onResetForm();

    context.setAlert({ 
        open:true, 
        message:'✅ Nuevo registro agregado', 
        type:'success' 
    });
    
    window.location.reload();

    return {errors:null};
}