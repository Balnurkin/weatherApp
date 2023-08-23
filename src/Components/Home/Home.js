import { useLoaderData, useParams } from "react-router-dom"
import './home.css'
import Container from "../Container/Container"
import CityBox from "../CityBox/CityBox"

export default function Home() {
    const weatherData = useLoaderData()
    console.log(weatherData)

    if (!weatherData) {
        return <Container>
            <div className="notfound">
                <div style={{ width: '400px', height: '200px', border: '2px solid darkslategray', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Вы не выбрали город</h1>
                </div>
            </div>
        </Container>
    }

    if (!Object.keys(weatherData).length > 0) {
        return <Container>
            <div style={{ width: '300px', height: '100vh', margin:'0 auto', paddingTop:'100px' }}>
                <div style={{ border:'2px solid darkslategray', width:'300px', height:'200px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                    <h3>Введите корректные данные</h3>
                </div>
                
            </div>
        </Container>
    }

    return (
        <Container>
            {weatherData.cityName !== undefined &&
                <CityBox cityName={weatherData.cityName} weatherData={weatherData} />
            }
        </Container>
    )
}