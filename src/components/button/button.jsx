import React from 'react';
import './button.scss';

export default function Button({ children, isGoogle, ...otherProps }) {
	return (
		<button className={`${isGoogle ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
			{children}
		</button>
	);
}
