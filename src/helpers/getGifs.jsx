

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=20&offset=10&rating=g&lang=en&api_key=NQI4Sm6oNxVGf98lY2bGnQsMbms326gw`;
    const response = await fetch( url );
    const {data} = await response.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url  
            // el ? pregunta si existe la propieda la utilice
        }
    });
    
    return gifs;
   
}