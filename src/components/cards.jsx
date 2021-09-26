import React, { useState, useEffect } from 'react';
import Card from './card';
import Pagination from './pagination';
import { paginate } from '../utils';

const Cards = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const length = photos.length;
  const pageSize = 6;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data.filter((item) => item.albumId === 1)));
  }, []);

  const handleCurrentPage = (index) => {
    setCurrentPage(index);
  };

  const increaseCurrentPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const decreaseCurrentPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (!photos) return <div>loading...</div>;

  
  const cropPhotos = paginate(photos, pageSize, currentPage);

  return (
    <>
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        length={length}
        onCurrentPage={handleCurrentPage}
        increaseCurrentPage={increaseCurrentPage}
        decreaseCurrentPage={decreaseCurrentPage}
      />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cropPhotos.map((photo) => (
          <Card key={photo.id} {...photo} />
        ))}
      </div>
    </>
  );
};

export default Cards;
