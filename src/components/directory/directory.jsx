import React from 'react';
import MenuItem from '../menu-item/menu-item';
import '../directory/directory.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector';

const Directory = ({sections}) => (
  <div className = 'directory-menu'>
    {sections.map((section) => (
      <MenuItem
        title = {section.title}
        key = {section.id}
        imageURL = {section.imageUrl}
        size = {section.size}
        linkUrl = {section.linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default (connect(mapStateToProps))(Directory);
