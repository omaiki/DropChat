import React from 'react';
import GifItem from './GifItem';
//
// stateless functional component : whenever it does not need to track or modify our app's state actively

const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id}
    gif={image}
    onGifSelect={props.onGifSelect}  />
  });

  return (
      <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;
