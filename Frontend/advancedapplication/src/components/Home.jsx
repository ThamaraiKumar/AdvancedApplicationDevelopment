import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import homeimage from '../assets/home-bg.jpg'
import Footer from './Footer'
import ImageHome from './ImageHome'

function Home() {
  return (
    <div>    
    <header>
    <div className="header-home">
    <div><Link to='/'><img src={logo} className='image-logo'/></Link></div>
    <h1 className='logo-yoga'>
    YOGA &nbsp;ACADEMY</h1><br/>
    <ul className='navbarlist'>
    <li><Link to="/" style={{textDecoration:'none', color:'inherit'}}>Home</Link></li>
    <li><Link to="/login" style={{textDecoration:'none', color:'inherit'}}>Login</Link></li>
    <li><Link to="/register" style={{textDecoration:'none', color:'inherit'}}>Register</Link></li>
    </ul>
    </div>
    <img src={homeimage} alt='yoga-image-background' height={700} width={1340}/>
    </header><br/>
    <div className='text-content-home'>
    <p className='font-effect-shadow-multiple'><q>Yoga is a mirror to look at ourselves from within</q></p>
    </div><br/>

    {/*<div className='image-slider'>
    <ImageHome/>
  </div>*/}

    <footer>
    <div className='footer-yoga'><Footer/></div>
    </footer>
    </div>
  )
}

export default Home