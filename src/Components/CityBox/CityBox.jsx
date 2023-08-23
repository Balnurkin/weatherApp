import './CityBox.css'

export default function CityBox({ cityName, weatherData }){
    return(
        <div className="city__box">
            <div className="box">
                {weatherData.temp !== undefined && 
                    <div className="style">
                        <h1>{cityName}</h1>
                        <h3>Temp: {weatherData.temp}</h3>
                        <h3>Feels like: {weatherData.feels_like}</h3>
                        <h3>Wind speed: {weatherData.wind_speed}</h3>
                    </div>
                }
            </div>
        </div>
    )
}