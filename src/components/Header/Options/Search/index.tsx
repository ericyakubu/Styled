import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./Search.module.scss";

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchInput = () => {
    if (!inputRef.current) return;
    setSearchInput(inputRef.current.value);
  };

  const handleSearch = () => {
    //TODO add search functionality
    console.log(searchInput);
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        name=""
        className={classes.search_txt}
        ref={inputRef}
        onChange={handleSearchInput}
      />
      <button className={classes.icon} onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
