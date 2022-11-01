import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            {!Cookies.get('token') && <li><Link to='/home'>Login</Link></li>}
            {Cookies.get('token') && <li onClick={() => {
                navigate('/home')
                Cookies.remove('token')
            }}>Logout</li>}
        </ul>
    </nav>
  )
}

export default Navbar