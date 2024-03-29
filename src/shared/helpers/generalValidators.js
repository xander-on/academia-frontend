


export const isEmail = ( email ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const isOnlyText = ( text ) => {
    const re = /^[A-Za-z\s]+$/;
    return re.test(String(text).toLowerCase());
}


export const isOnlyNumbers = ( text ) => {
    const re = /^[0-9]+$/;
    return re.test(String(text).toLowerCase());
}