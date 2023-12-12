import React , {useState} from 'react'
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import './navbar.css'

function Navbar() {

    const [active ,setActive] = useState('navBar')

    // Function to toggile navBar
    const showNavbar = () => {
        setActive('navBar activeNavbar')
    }

    // Function to remove navBar
    const removeNavbar = () => {
        setActive('navBar')
    }

  return (
    <div>
      <section className="navbarSection">
        <header className="header flex">

            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1>< MdTravelExplore className="icon"/> Travel.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">

                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Shop</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Pages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">News</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>

                    <button className='btn'>
                        <a href="#">BOOK NEW</a>
                    </button>

                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                <IoIosCloseCircle className='icon'/>
                </div>

            </div>

            <div onClick={showNavbar} className="toggileNavbar">
            <PiDotsNineBold className='icon'/>
            </div>

        </header>
      </section>
    </div>
  )
}

export default Navbar
