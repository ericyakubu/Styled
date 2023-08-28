import React, { useState, useRef } from "react";
import classes from "./Sort.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { SortCategories } from "../../constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { setSortCategory } from "../../redux/filter";

const Sort: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showOpt, setShowOpt] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    SortCategories.SORT_BY.name
  );
  const sortRef = useRef<HTMLDivElement>(null);
  const categories: { [key: string]: string }[] = [
    SortCategories.SORT_BY,
    SortCategories.NEWEST,
    SortCategories.OLDEST,
    SortCategories.PRICE_LOW_TO_HIGH,
    SortCategories.PRICE_HIGH_TO_LOW,
    SortCategories.NAME_A_TO_Z,
    SortCategories.NAME_Z_TO_A,
  ];

  const toggleOptions = () => {
    setShowOpt((prev) => !prev);
  };

  const handleSelectCategory = (category: { [key: string]: string }) => {
    setShowOpt(false);
    setSelectedCategory(category.name);
    dispatch(setSortCategory(category.value));
  };

  return (
    <div className={classes.container}>
      <span className={classes.label}>Sort</span>
      <div className={classes.sort} ref={sortRef}>
        <button
          className={`${classes.main_btn} ${showOpt ? classes.shadow : ""}`}
          onClick={toggleOptions}
        >
          {selectedCategory} <IoIosArrowDown />
        </button>
        {showOpt && (
          <div className={classes.options}>
            {categories.map((category, i) => (
              <button
                className={`${classes.option} ${
                  selectedCategory === category.name ? classes.selected : ""
                }`}
                value={category.value}
                key={`sort_category_${i}`}
                onClick={() => handleSelectCategory(category)}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
