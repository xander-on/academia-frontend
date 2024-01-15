

export const materiaMapper = ( materia ) =>{
    
    if ( !materia ) return;
    
    const materiaMapped = {
        id  : materia.idMateria,
        name: materia.name
    }

    return materiaMapped;
}


export const profesorMapper = ( profesor ) =>{
    
    if ( !profesor ) return;
    
    const profesorMapped = {
        id  : profesor.idProfesor,
        dni: profesor.ci,
        name: profesor.name,
        email: profesor.email,
        photo: profesor.photo
    }

    return profesorMapped;
}


export const aulaMapper = ( aula ) =>{
    if ( !aula ) return;
    
    const aulaMapped = {
        id     : aula.idAula,
        code   : aula.codigo,
        date   : aula.date,
        time   : aula.time,
        theme  : aula.theme,
        course : aula.materia,
        teacher: aula.profesor
    }

    return aulaMapped;
}