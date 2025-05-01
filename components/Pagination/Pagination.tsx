"use client";
import React from "react";
import classes from "./style.module.css";
import { PropsPagination } from "./types";

const Pagination: React.FC<PropsPagination> = ({
  currentPage,
  displayedHouses,
  itemsPerPage,
  setCurrentPage,
}) => {
    const maxVisiblePages = 5;
  const totalPages = Math.ceil(displayedHouses.length / itemsPerPage);
  const getPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {totalPages > 1 && (
        <div className={classes.pagination}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={classes.pagination__button}
          >
            Назад
          </button>

          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${classes.pagination__button} ${
                currentPage === page ? classes.active : ""
              }`}
            >
              {page}
            </button>
          ))}

          {totalPages > maxVisiblePages &&
            currentPage < totalPages - Math.floor(maxVisiblePages / 2) && (
              <>
                <span className={classes.pagination__dots}>...</span>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className={`${classes.pagination__button} ${
                    currentPage === totalPages ? classes.active : ""
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={classes.pagination__button}
          >
            Вперед
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
