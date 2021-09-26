import React from 'react';

const Pagination = ({
  pageSize,
  currentPage,
  length,
  onCurrentPage,
  increaseCurrentPage,
  decreaseCurrentPage,
}) => {
  const pageNumbers = Math.ceil(length / pageSize);

  return (
    <nav className="mb-5">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <span
            onClick={decreaseCurrentPage}
            className="page-link"
            role="button"
          >
            Previous
          </span>
        </li>
        {new Array(pageNumbers).fill('').map((_, index, array) => {
          const currentIndex = index + 1;
          return (
            <li
              key={array.length - index}
              className={`page-item ${
                currentIndex === currentPage && 'active'
              }`}
            >
              <span
                onClick={() => onCurrentPage(currentIndex)}
                className="page-link"
                role="button"
              >
                {currentIndex}
              </span>
            </li>
          );
        })}

        <li className={`page-item ${currentPage === pageNumbers && 'disabled'}`}>
          <span
            onClick={increaseCurrentPage}
            className="page-link"
            role="button"
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
