

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


export const aulaMapper = ( aula ) =>{
    if ( !aula ) return;



    const aulaMapped = {
        id     : aula.id,
        code   : aula.codigo,
        date   : aula.date,
        time   : aula.time,
        theme  : aula.theme,
        course : aula.materia,
        teacher: aula.profesor
    }

    return aulaMapped;
}