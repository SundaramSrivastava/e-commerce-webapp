import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from './../firebase/firebase.utils'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ CurrentUser }) => (
<div className='header'>
    <Link className="logo-container" to='/'>
        <Logo className='logo' />
    </Link>
    <div className= 'options'>
        <Link className="option" to='/shop'>
            SHOP
        </Link>
        <Link className="option" to='/contact'>
            CONTACT
        </Link>
        {
            CurrentUser ?
            <div className="option" onClick={()=> auth.signOut() }> Sign Out </div>
            :
            <Link className="option" to='/signin'> Sign in </Link>
        }
    </div>
</div>
)

export default Header