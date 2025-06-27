import React from "react";
import "./Pagination.css";

const Pagination = (
  pageCount: number,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  return (
    <div className="paginationButtonContainer">
      <div
        className="leftarrow"
        aria-hidden="true"
        onClick={() =>
          setCurrentPage(currentPage === 0 ? currentPage : currentPage - 1)
        }
      >
        {/* <ChevronDoubleLeftIcon className={styles.chevronIcon} /> */}
      </div>
      {Array.from({ length: pageCount }).map((d, i) => (
        <button
          className={
            i === currentPage ? "activePaginationButton" : "paginationButton"
          }
          onClick={() => setCurrentPage(i)}
          key={i}
          aria-hidden="true"
        >
          <span className="paginationAlignment">{i + 1}</span>
        </button>
      ))}
      <div
        className="rightarrow"
        aria-hidden="true"
        onClick={() =>
          setCurrentPage(
            currentPage === pageCount - 1 ? pageCount - 1 : currentPage + 1
          )
        }
      >
        {/* <ChevronDoubleRightIcon className={styles.chevronIcon} /> */}
      </div>
    </div>
  );
};

export default Pagination;
