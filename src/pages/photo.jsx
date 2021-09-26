import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { toCapitalize } from '../utils';

const Photo = () => {
  const { photoId } = useParams();
  const [state, setState] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`).then(
      (response) => response.json().then((data) => setState(data))
    );
  }, [photoId]);

  if (!state) return <div>Loading...</div>

  const {id, url, title } = state;

  return (
    <div className="card mb-3">
      <img src={url} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">Card title #{id}</h5>
        <p className="card-text">{toCapitalize(title)}</p>
      </div>
    </div>
  );
};

export default Photo;
