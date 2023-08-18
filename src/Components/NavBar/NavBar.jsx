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
                <div onClick={showMenu} style={{color: 'white'}} >
                    {clicked ? <MdClose/> : <RxHamburgerMenu/>}
                </div>
                <div style={{ display: clicked ? 'flex' : 'none', gap: '20px' }} >
                    <Link to='/' >
                        Home
                    </Link>
                    <Link to='/profile' >
                        Profile
                    </Link>
                    <Link to='/search' >
                        <BsSearch/>
                    </Link>
                </div>
                
            </div>
        </Container>
    )
}