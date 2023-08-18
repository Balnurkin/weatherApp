import { Link, useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import './Profile.css'

export default function Profile (){
    const cityItem = JSON.parse(localStorage.getItem('CityItems')) 

    const cityList = cityItem.map((el, index)=>{
        return <li key={index} className="list"> <Link to={`/${el}`} >{el}</Link> </li>
    })

    return(
        <Container>
            {cityItem !== undefined && 
            <div className="profile__box">
                <div>
                    {cityList}
                </div>
            </div>}
        </Container>
    )
}