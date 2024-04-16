import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className={styles.parent}>
        <div className={styles.logo}>
        </div>
        <h1>Home</h1>
        <input className={styles.input}/>
    </div>
  )
}

export default Header