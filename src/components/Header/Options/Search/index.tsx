import React from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./Search.module.scss";
import { useAppDispatch } from "../../../../redux/hooks";
import { setFilterName } from "../../../../redux/filter";
import { setOpenMenu } from "../../../../redux/menu";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm();

  const handleSearch: SubmitHandler<FieldValues> = (data) => {
    dispatch(setFilterName(data.name));
    dispatch(setOpenMenu(false));
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit(handleSearch)}>
      <input type="text" {...register("name")} className={classes.search_txt} />
      <button className={classes.icon} type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
