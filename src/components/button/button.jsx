import React from 'react';
import './button.scss';

export const Button = ({ children, isGoogle, inverted, ...otherProps }) => {
	return (
		<button
			className={`${inverted ? 'inverted' : ''} ${isGoogle ? 'google-sign-in' : ''} custom-button`}
			{...otherProps}>
			{children}
		</button>
	);
};
export default Button;
