import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = ({accountName,user,setUser,handleSearch}) => {
    // const [accountName,setAccountName] = useState('User Name')
   
  return (
    <div className={styles.parent}>
      <div className={styles.l}><h2>Github<br/> Explorer</h2></div>
      <div style={{display: accountName? 'block':"none"}} className={styles.inputBarParent}>
        <div className={styles.common}>
          <input className={styles.input} placeholder="Enter User Name Here" value={user} onChange={(e)=>setUser(e.target.value)} />
          <button className={styles.submitButton} onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className={styles.account}> <p className={styles.accountInner}>{accountName ? accountName:"User Name"}</p>
      </div>
    </div>
  );
};

export default Header;
