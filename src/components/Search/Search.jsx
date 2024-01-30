import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

const Search = ({ placeholder }) => {
  return (
    <form className={styles.searchWrapper}>
      <div>
        <input
          type="text"
          className={styles.search}
          placeholder={placeholder}
        />
      </div>
      <div>
        <button type="submit" className={styles.searchButton}>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default Search;
