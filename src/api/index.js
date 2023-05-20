import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// const options = ;


 export const getPlacesData = async (bounds) => {
    try {
        const {data: {data}} = await axios.request(URL, {
          params: {
            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng,
            tr_longitude: bounds.ne.lng
          },
          headers: {
            'X-RapidAPI-Key': '3C3486odL5mshZXgj8X4tKaVvoLOp1gXzFTjsnW6wQFm9rt8Qg',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        console.log(data[0].name)
        console.log(bounds)
        return data;
    } catch (error) {
        console.log(error);
    }
}