import React from 'react';
import './button.scss';

export default function Button({ children, isGoogle, inverted, ...otherProps }) {
	return (
		<button className={`${inverted ? 'inverted' : ''} ${isGoogle ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
			{children}
		</button>
	);
}
