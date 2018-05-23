import React from "react";
import './Thumbnails.css'

const Thumbnails = props => (
  <div className="thumb" url={props.url} thumbnailurl={props.thumbnailurl} title={props.title} id={props.id} key={props.id}>
    <img onClick={() => props.selector(props.id)} className="img" src={props.thumbnailurl} alt='thumbnail' />
  </div>
);

export default Thumbnails;
