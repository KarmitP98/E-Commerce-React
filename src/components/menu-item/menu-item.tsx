import React from 'react';
import {withRouter} from 'react-router-dom';
import '../menu-item/menu-item.styles.scss';

function MenuItem(props: any) {
  return (
    <div
      className = {`${props.size} menu-item`}
      onClick = {() => props.history.push(`${props.match.url}${props.linkUrl}`)}
    >
      <div
        className = 'background-image'
        style = {{backgroundImage: `url(${props.imageURL})`}}
      />
      <div className = 'content'>
        <h1 className = 'title'>{props.title.toUpperCase()}</h1>
        <span className = 'subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
