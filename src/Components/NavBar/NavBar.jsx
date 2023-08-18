import { Link } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdClose} from 'react-icons/md'
import { useState } from "react"
import Container from "../Container/Container"

export default function NavBar (){
    const [clicked, setClicked] = useState(false)

    const showMenu = () => {
        setClicked(!clicked)
    }

    return(
        <Container>
            <div className="navbar">
                <div onClick={showMenu} style={{color: 'white'}}>
                    {clicked ? <MdClose/> : <RxHamburgerMenu/>}
                </div>
                <Link to='/' style={{ display: clicked ? 'block' : 'none' }}>
                    Home
                </Link>
                <Link to='/profile' style={{ display: clicked ? 'block' : 'none' }}>
                    Profile
                </Link>
                <Link to='/search' style={{ display: clicked ? 'block' : 'none' }}>
                    <BsSearch/>
                </Link>
            </div>
        </Container>
    )
}