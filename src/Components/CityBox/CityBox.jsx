import './CityBox.css'

export default function CityBox({ cityName, weather }){
    return(
        <div className="city__box">
            <div className="box">
                {weather.temp !== undefined && 
                    <div className="style">
                        <h1>{cityName}</h1>
                        <h3>Temp: {weather.temp}</h3>
                        <h3>Feels like: {weather.feels_like}</h3>
                        <h3>Wind speed: {weather.wind_speed}</h3>
                    </div> } 
                {weather.temp === undefined && 
                    <div style={{ width:'300px', height:'200px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <h3>Введите корректные данные</h3>
                    </div> }
            </div>
        </div>
    )
}