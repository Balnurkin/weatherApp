import { useEffect } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import { useState } from "react"
import './home.css'
import Container from "../Container/Container"
import { data, getLoaderData, getWeather } from "../../lib/lib"
import CityBox from "../CityBox/CityBox"

export default function Home(){
    const weatherData = useLoaderData()
    console.log(weatherData)

    return (
        <Container>
            {weatherData.cityName !== undefined && 
                <CityBox cityName={weatherData.cityName} weatherData={weatherData}/>}
            {weatherData.cityName === undefined && 
                <div className="notfound">
                    <div style={{ width:'400px', height:'200px', border:'2px solid darkslategray', margin:'0 auto', display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <h1>Вы не выбрали город</h1>
                    </div>
                </div>
            }
        </Container>
    )
}