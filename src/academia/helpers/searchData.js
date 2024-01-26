


export const searchDataById = ( arrayData, id) =>{
    if(!arrayData) return;
    const searchData = arrayData.find( (data) => data.id === id );

    return searchData;
}