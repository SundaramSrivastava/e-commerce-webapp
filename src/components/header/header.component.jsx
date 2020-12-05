import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { auth } from './../firebase/firebase.utils'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ CurrentUser, Hidden }) => (
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
        <CartIcon />
    </div>
    { Hidden ? null: <CartDropdown /> }
</div>
)

const mapStateToProps = createStructuredSelector({
    CurrentUser: selectCurrentUser,
    Hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)