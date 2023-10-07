import React from 'react';
import styles from '../styles/SearchBar.module.css';

function SearchBar() {

return (
        <form className={styles.searchContainer}>
            <input className={styles.searchBar} name="search" type="text" placeholder="search"></input>
            <button className={styles.button} name="button" type="submit">Search</button>
        </form>
    );
}


export default SearchBar;