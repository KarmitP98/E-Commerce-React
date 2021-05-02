import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';

import './header.styles.scss';
import { CartDropDown } from '../cart-dropdown/cart-dropdown';

export const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						Sign Out
					</div>
				) : (
					<Link className='option' to='/login'>
						Login
					</Link>
				)}
				<CartIcon className='option' />
			</div>
			{hidden ? null: <CartDropDown />}
		</div>
	);
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser: currentUser,
	hidden: hidden,
});

export default connect(mapStateToProps)(Header);
