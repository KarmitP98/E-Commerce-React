import React from 'react'
import { connect } from 'react-redux'
import Button from '../button/button'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

export const CartDropDown = ({cartItems}) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					cartItems.map(item => <CartItem key={item.id} item={item}/>)
				}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	)
}

const mapStateToProps = ({cart: {cartItems}}) => ({
	cartItems
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
