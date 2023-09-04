import React, { useState } from "react";
import classes from "./Pagination.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { setPageNumber } from "../../redux/filter";

const Pagination: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const numberOfProducts = 200;
  const productsPerPage = 20;
  const leftOver = numberOfProducts % productsPerPage;
  const numberOfPages =
    leftOver !== 0
      ? (numberOfProducts - leftOver) / productsPerPage + 1
      : numberOfProducts / productsPerPage;
  const pages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  const handlePageChange = (page: number) => {
    if (page <= pages.length && page !== 0) {
      setCurrentPage(page);
      dispatch(setPageNumber(page));
    }
  };

  return (
    <div className={classes.container}>
      <button
        className={`${classes.pagination_btn} ${
          currentPage === 1 ? classes.disabled : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>
      {pages.map((page, i) => (
        <button
          className={`${classes.pagination_btn} ${
            currentPage === page ? classes.current_page : ""
          }`}
          key={`page_btn_${i}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`${classes.pagination_btn} ${
          currentPage === pages.length ? classes.disabled : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
