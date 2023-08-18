import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"
import './home.css'
import Container from "../Container/Container"
import { getWeather } from "../../lib/lib"
import CityBox from "../CityBox/CityBox"

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
                <CityBox cityName={cityName} weather={weather}/>}
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