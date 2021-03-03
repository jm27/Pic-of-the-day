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
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link text-dark"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
