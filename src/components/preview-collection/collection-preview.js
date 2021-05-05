import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item';

export const CollectionPreview = ({title, items, history}) => {

    return (
        <div className = "collection-preview">
            <h1 className = "title"
            onClick={() => history.push(`${title}`)}>{title.toUpperCase()}</h1>
            <div className = "preview">
                {
                    items
                        .filter((item, index) => index < 4)
                        .map((item) =>
                            <CollectionItem key = {item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default CollectionPreview;
