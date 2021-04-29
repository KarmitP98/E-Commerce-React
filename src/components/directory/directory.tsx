import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import '../directory/directory.styles.scss';
import SECTIONS_DATA from '../../constants/sections.data';

class Directory extends Component <any, any> {
	constructor( props: any ) {
		super( props );
		this.state = {
			sections: SECTIONS_DATA,
		};
	}
	
	render() {
		return (
			<div className = "directory-menu">
				{this.state.sections.map( ( section: any ) =>
					                          <MenuItem title = {section.title}
					                                    key = {section.id}
					                                    imageURL = {section.imageUrl}
					                                    size = {section.size}
					                                    linkUrl = {section.linkUrl}/> )}
			</div>
		);
	}
}

export default Directory;
