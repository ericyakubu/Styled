import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./Search.module.scss";
import { useAppDispatch } from "../../../../redux/hooks";
import { setFilterName } from "../../../../redux/filter";
import { setOpenMenu } from "../../../../redux/menu";

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>();
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchUpdate = () => {
    if (!inputRef.current) return;
    setSearchInput(inputRef.current.value);
  };

  const handleSearch = () => {
    dispatch(setFilterName(searchInput));
    dispatch(setOpenMenu(false));
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        name=""
        className={classes.search_txt}
        ref={inputRef}
        onChange={handleSearchUpdate}
      />
      <button className={classes.icon} onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
