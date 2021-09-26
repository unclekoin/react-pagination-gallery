import React from 'react';
import { Link } from 'react-router-dom';
import { toCapitalize, toCutString } from '../utils';

const Card = ({ id, title, url, thumbnailUrl }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={thumbnailUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{toCutString(title)}</h5>
          <p className="card-text">{toCapitalize(title)}</p>
        </div>
        <div className="card-footer">
          <Link to={`/gallery/${id}`} className="link text-decoration-none">
            To full size &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
