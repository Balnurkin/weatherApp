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
        localStorage.setItem('CityItems', JSON.stringify(allCityItems))
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