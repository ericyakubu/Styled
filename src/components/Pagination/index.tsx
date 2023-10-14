import React from "react";
import classes from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { setPageNumber } from "../../redux/filter";

const Pagination: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((state: RootState) => state.filter);
  const numberOfProducts = 100;
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

  const handleShowMore = () => {
    dispatch(setPageNumber(filter.pageNumber + 1));
  };

  return (
    <div className={classes.container}>
      <button
        className={
          filter.showMore
            ? classes.show_btn
            : `${classes.show_btn} ${classes.disabled}`
        }
        onClick={handleShowMore}
        disabled={filter.showMore ? false : true}
      >
        Show more
      </button>
    </div>
  );
};

export default Pagination;
