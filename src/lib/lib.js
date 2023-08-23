import { useLoaderData } from "react-router-dom"

const url = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY

export const getCoordinates = async (cityName) => {
    const req = await fetch(`${url}/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`)
    const response = await req.json()
    const data = response[0]
    
    return{
    lat: data?.lat,
    lon: data?.lon
    }
}

export const fetchWeather = async (lat, lon) => {
    if(lat !== undefined && lon !== undefined){
        const req = await fetch(`${url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        const response = await req.json()

        return response
    }
    return {}
}

export const getWeather = async ({params}) => {
    console.log(123123);
    const cityName = params.cityName
    const coordinates = await getCoordinates(cityName)
    const weather = await fetchWeather(coordinates.lat, coordinates.lon)
    console.log(weather);
    if(!Object.keys(weather).length > 0){
        return {}
    }
    else{
        return {
            cityName: cityName,
            temp: weather?.main.temp,
            feels_like: weather?.main.feels_like,
            wind_speed: weather?.wind.speed
        }
    }
    
}
