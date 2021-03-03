import React from "react";

function Pagination({ picsPerPage, totalPics, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPics / picsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="d-flex justify-content-center mt-3">
      <nav className="pages">
        <ul className="pagination pagination-lg">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <button
                onClick={() => paginate(number)}
                className="page-link text-dark"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
