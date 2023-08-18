import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import './home.css'
import Container from "../Container/Container"
import { getWeather } from "../../lib/lib"

export default function Home(){
    const { cityName } = useParams()
    const [weather, setWeather] = useState({temp: undefined, feels_like: undefined, wind_speed: undefined})

    useEffect(() => {
        const data = async() => {
            if(cityName !== undefined){
                const weatherData = await getWeather(cityName)
                setWeather({
                    temp: weatherData?.main?.temp,
                    feels_like: weatherData?.main?.feels_like,
                    wind_speed: weatherData?.wind?.speed
                })
            }
        }
        data()
    }, [])

    return (
        <Container>
            {cityName !== undefined && 
                <div className="city__box">
                    <div className="box">
                        <h1>{cityName}</h1>
                        <div>
                            {weather.temp !== undefined ? 
                            <div className="style">
                                <h3>Temp: {weather.temp}</h3>
                                <h3>Feels like: {weather.feels_like}</h3>
                                <h3>Wind speed: {weather.wind_speed}</h3>
                            </div> : ''} 
                        </div>
                    </div>
                </div>}
            {cityName === undefined && 
                <div className="notfound">
                    <div style={{ width:'400px', height:'200px', border:'2px solid darkslategray', margin:'0 auto', display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <h1>Вы не выбрали город</h1>
                    </div>
                </div>
            }
        </Container>
    )
}