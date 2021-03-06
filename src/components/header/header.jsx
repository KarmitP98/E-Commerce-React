import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import {createStructuredSelector} from 'reselect';

import './header.styles.scss';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {signOutStart} from "../../redux/user/user.actions";

export const Header = ({currentUser, hidden, signOutStart}) => {
  return (
    <div className = 'header'>
      <Link className = 'logo-container' to = '/'>
        <Logo className = 'logo'/>
      </Link>
      <div className = 'options'>
        <Link className = 'option' to = '/shop'>
          SHOP
        </Link>
        <Link className = 'option' to = '/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className = 'option' onClick = {signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className = 'option' to = '/login'>
            LOGIN
          </Link>
        )}
        <CartIcon className = 'option'/>
      </div>
      {hidden ? null : <CartDropDown/>}
    </div>
  );
};

// This will automatically pass the required state required
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
