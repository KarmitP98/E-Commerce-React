import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory';

export const Homepage = ( props: any ) => {
	
	return (
		<div className="homepage">
			<Directory/>
		</div>
	);
};
