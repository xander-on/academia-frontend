// import { urlsAPI } from "../../config/urlsAPI";
import { getRegisterById } from "../services";


export const materiaMapper = ( materia ) =>{
    
    if ( !materia ) return;
    
    const materiaMapped = {
        id  : materia.id,
        name: materia.name
    }

    return materiaMapped;
}


export const profesorMapper = ( profesor ) =>{
    
    if ( !profesor ) return;
    
    const profesorMapped = {
        id    : profesor.id,
        dni   : profesor.ci,
        name  : profesor.name,
        email : profesor.email,
        photo : profesor.photo
    }

    return profesorMapped;
}


export const aulaMapper = async( aula ) =>{
    if ( !aula ) return;

    const { ok:okMateria, results:materia } = await getRegisterById(aula?.materia);
    const { ok:okProfesor, results:profesor } = await getRegisterById(aula?.profesor);


    if( !okMateria && !okProfesor) return;

    const aulaMapped = {
        id     : aula.id,
        code   : aula.codigo,
        date   : aula.date,
        time   : aula.time,
        theme  : aula.theme,
        course : materia?.name,
        teacher: profesor.name
    }

    return aulaMapped;
}