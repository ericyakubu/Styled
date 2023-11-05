import React, { useEffect, useRef, useState } from "react";
import classes from "./Filter.module.scss";
import { BiPlus } from "react-icons/bi";
import { Categories, FilterCategories, Sizes } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { setFilters } from "../../redux/filter";
import { filterType } from "../../types";

const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filters } = useSelector((state: RootState) => state.filter);
  const [selectedFilters, setSelectedFilters] = useState<filterType>(filters);
  const [priceToggle, setPriceToggle] = useState<boolean>(false);
  const [categoryToggle, setCategoryToggle] = useState<boolean>(false);
  const [sizeToggle, setSizeToggle] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

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
    if (category === FilterCategories.CATEGORY) {
      const { categories } = selectedFilters;
      const index = categories.indexOf(value);
      if (index !== -1) {
        const arr = categories.filter((cat) => cat !== value);
        setSelectedFilters((prev) => ({
          ...prev,
          categories: arr,
        }));
      } else {
        setSelectedFilters((prev) => ({
          ...prev,
          categories: [...prev.categories, value],
        }));
      }
    }

    if (category === FilterCategories.SIZE) {
      const { sizes } = selectedFilters;
      const index = sizes.indexOf(value);
      if (index !== -1) {
        const arr = sizes.filter((size) => size !== value);
        setSelectedFilters((prev) => ({
          ...prev,
          sizes: arr,
        }));
      } else {
        setSelectedFilters((prev) => ({
          ...prev,
          sizes: [...prev.sizes, value],
        }));
      }
    }

    setDisabled(false);
  };

  const handlePriceFilter = (category: string) => {
    if (category === "min" && minRef.current)
      setSelectedFilters((prev) => ({
        ...prev,
        prices: {
          ...prev.prices,
          min: Number(minRef.current?.value),
        },
      }));

    if (category === "max" && maxRef.current)
      setSelectedFilters((prev) => ({
        ...prev,
        prices: {
          ...prev.prices,
          max: Number(maxRef.current?.value),
        },
      }));
    setDisabled(false);
  };

  const handleApplyFilters = () => dispatch(setFilters(selectedFilters));
  const handleRemoveFilters = () => {
    setSelectedFilters((prev) => ({
      ...prev,
      categories: [],
      sizes: [],
      prices: {
        min: null,
        max: null,
      },
    }));
    dispatch(
      setFilters({
        name: filters.name,
        categories: [],
        sizes: [],
        prices: {
          min: null,
          max: null,
        },
      })
    );
    setDisabled(true);
  };

  useEffect(() => {
    const check = selectedFilters.prices.min
      ? false
      : selectedFilters.prices.max
      ? false
      : selectedFilters.sizes.length
      ? false
      : selectedFilters.categories.length
      ? false
      : true;
    setDisabled(check);
  }, [selectedFilters]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.sticky}>
          <p className={classes.title}>Filter by</p>
          <div className={classes.section}>
            <button
              className={classes.sub_title}
              onClick={() => handleFiltersOpen(FilterCategories.PRICE)}
            >
              <span>Price</span> <BiPlus />
            </button>
            <div
              className={`${classes.price_inputs} ${
                priceToggle ? classes.show : classes.hide
              }`}
            >
              <input
                type="number"
                name="min_price"
                ref={minRef}
                min={0}
                max={9998}
                value={selectedFilters.prices.min || ""}
                id=""
                placeholder="Min"
                onChange={() => handlePriceFilter("min")}
              />
              <input
                type="number"
                name="max_price"
                ref={maxRef}
                min={1}
                max={9999}
                value={selectedFilters.prices.max || ""}
                id=""
                placeholder="Max"
                onChange={() => handlePriceFilter("max")}
              />
            </div>
          </div>
          <div className={classes.section}>
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
                    checked={selectedFilters.categories.includes(category)}
                    value={category}
                    onChange={() =>
                      handleFilter(FilterCategories.CATEGORY, category)
                    }
                  />
                  <span>{category}</span>
                </p>
              ))}
            </div>
          </div>
          <div className={classes.section}>
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
                    checked={selectedFilters.sizes.includes(size)}
                    value={size}
                    onChange={() => handleFilter(FilterCategories.SIZE, size)}
                  />
                  <span>{size}</span>
                </p>
              ))}
            </div>
          </div>
          <button
            className={`${classes.removeFilters} ${
              disabled ? classes.disabled : ""
            }`}
            onClick={handleRemoveFilters}
          >
            Reset filters
          </button>
          <button className={classes.applyFilters} onClick={handleApplyFilters}>
            Apply filters
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
