import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Container from "../Container/Container"
import './search.css'

export default function Search(){
    const navigate = useNavigate()

    const [cityName, setCityName] = useState('')
    const changeHandler = (e) => {
        setCityName(e.target.value)
    }

    const onClick = () => {
        let allCityItems = JSON.parse(localStorage.getItem('CityItems')) || []
        allCityItems.push(cityName)
        const allCityItemsToLowerCase = allCityItems.map((el) => {return el.toLowerCase()})
        const allCity = [...new Set(allCityItemsToLowerCase)]
        const allCityData = allCity.map(el => { return el.replace(el[0], el[0].toUpperCase()) })
        localStorage.setItem('CityItems', JSON.stringify(allCityData))
        navigate(`/${cityName}`)
    }

    return (
        <Container>
            <div className="search__box">
                <div className="inner__box">
                    <h1>Search</h1>
                    <input type="text" value={cityName} onChange={changeHandler} />
                    <button className="search__btn" onClick={onClick} >Find</button>
                </div>
            </div>
        </Container>
    );
}