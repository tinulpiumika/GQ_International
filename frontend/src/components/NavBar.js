import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import GQ from '../images/GQ.png'
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleclick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);



    const  [button, setButton] = useState (true);



    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton (false);


        }else{
            setButton (true);
        }
    };

    window.addEventListener('resize', showButton);



    return (
        <>
            <nav className='navbar'>


                <div className="navbar-container">

                        <Link to= '/' className='navbar-log'>
                            <img src={GQ} height='100px' width='150px;' alt="Isuru"/>
                            GQ INTERNATIONAL 
                         </Link>

                        <div className= 'menu-icon' onClick = {handleclick}>

                            <i className={click ? 'fas fa-times': 'fas fa-bars'}/>

                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className = 'nav-item'>
                                <Link to='/' className = 'nav-links' onclick = {closeMobileMenu}>
                                    Home
                                </Link>
                            </li>

                            <li className = 'nav-item'>
                                <Link to='/' className = 'nav-links' onclick = {closeMobileMenu}>
                                    Stock
                                </Link>
                            </li>

                            <li className = 'nav-item'>
                                <Link to='/' className = 'nav-links' onclick = {closeMobileMenu}>
                                    Something
                                </Link>
                                
                            </li>

                            <li className = 'nav-item'>
                                <Link to='/' className = 'nav-links-mobile' onclick = {closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>

                        </ul>


                        {button && <Button buttonStyle= 'btn--outline' > SIGN UP </Button>}


                   
                </div>
            </nav>
        </>
    )
}

export default NavBar
