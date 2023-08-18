import './CityBox.css'

export default function CityBox({ cityName, weather }){
    return(
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
        </div>
    )
}