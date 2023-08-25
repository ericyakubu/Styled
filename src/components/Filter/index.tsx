import React, { useState } from "react";
import classes from "./Filter.module.scss";
import { BiPlus } from "react-icons/bi";
import { Categories, FilterCategories, Sizes } from "../../constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { setFilterCategories, setFilterSizes } from "../../redux/filter";

const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [priceToggle, setPriceToggle] = useState<boolean>(false);
  const [categoryToggle, setCategoryToggle] = useState<boolean>(false);
  const [sizeToggle, setSizeToggle] = useState<boolean>(false);

  const handleFiltersOpen = (category: string) => {
    switch (category) {
      case FilterCategories.PRICE:
        setPriceToggle((prev) => !prev);
        break;
      case FilterCategories.CATEGORY:
        setCategoryToggle((prev) => !prev);
        break;
      case FilterCategories.SIZE:
        setSizeToggle((prev) => !prev);
        break;
      default:
        break;
    }
  };

  const handleFilter = (category: string, value: string) => {
    switch (category) {
      case FilterCategories.CATEGORY:
        dispatch(setFilterCategories(value));
        break;
      case FilterCategories.SIZE:
        dispatch(setFilterSizes(value));
        break;
      default:
        break;
    }
  };

  //TODO add plus-minus animation on filter openning
  return (
    <div className={classes.container}>
      <div className={classes.sticky}>
        <p className={classes.title}>Filter by</p>
        <section>
          <button
            className={classes.sub_title}
            onClick={() => handleFiltersOpen(FilterCategories.PRICE)}
          >
            <span>Price</span> <BiPlus />
          </button>
          <div
            className={classes.price_inputs}
            style={priceToggle ? { marginTop: "20px", height: "auto" } : {}}
          >
            <input
              style={priceToggle ? { height: "50px", opacity: 1 } : {}}
              type="number"
              name="min_price"
              min={0}
              max={9998}
              id=""
              placeholder="Min"
            />
            <input
              style={priceToggle ? { height: "50px", opacity: 1 } : {}}
              type="number"
              name="max_price"
              min={1}
              max={9999}
              id=""
              placeholder="Max"
            />
          </div>
        </section>
        <section>
          <button
            className={classes.sub_title}
            onClick={() => handleFiltersOpen(FilterCategories.CATEGORY)}
          >
            <span>Category</span> <BiPlus />
          </button>
          <div
            className={`${classes.categories} ${
              categoryToggle ? classes.show : classes.hide
            }`}
          >
            {Categories.map((category, i) => (
              <p key={i} className={classes.category}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={category}
                  onClick={() =>
                    handleFilter(FilterCategories.CATEGORY, category)
                  }
                />
                <span>{category}</span>
              </p>
            ))}
          </div>
        </section>
        <section>
          <button
            className={classes.sub_title}
            onClick={() => handleFiltersOpen(FilterCategories.SIZE)}
          >
            <span>Size</span> <BiPlus />
          </button>
          <div
            className={`${classes.sizes} ${
              sizeToggle ? classes.show : classes.hide
            }`}
          >
            {Sizes.map((size, i) => (
              <p key={i} className={classes.size}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={size}
                  onClick={() => handleFilter(FilterCategories.SIZE, size)}
                />
                <span>{size}</span>
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Filter;
