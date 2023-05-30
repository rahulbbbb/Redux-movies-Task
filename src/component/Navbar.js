import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
        <Link className={styles.link} to='/'>Home</Link>
        <Link className={styles.link} to='/Favourites'> Favourites</Link>
    </div>
  )
}

export default Navbar;