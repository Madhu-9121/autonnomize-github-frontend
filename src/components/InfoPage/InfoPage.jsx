import React,{useState} from 'react'
import styles from './InfoPage.module.css'
const InfoPage = ({repo,setShowDesc}) => {

    const categories = ["Code Review", 'IDEs',"Free","Paid"]
    // console.log(repo)
    const handleBack = ()=>{
        setShowDesc(false)
    }
  return (
    <div className={styles.parent}>
        <button onClick={handleBack} className={styles.goback}>{"<"} Go Back</button>
        <div>
            <div className={styles.left}>
            <img  className={styles.profileImage}src={repo.owner.avatar_url} alt='user'/>
            <p style={{fontWeight:"600",opacity:"0.8"}}>Verified By GitHub</p>
            <p>GitHub confirms that this app meets the <span style={{color:"blue",fontWeight:"600",opacity:"0.7"}}>requirements for verification.</span> </p>

            </div>
            <div className={styles.catHead}>
                <p className={styles.categories}>Categories</p>
                <div className={styles.catParent}>
                {
                    categories.map((cat)=> <button className={styles.button}>{cat}</button>)
                }

                </div>
                
            </div>
            

        </div>
        <div className={styles.right}>
            <p className={styles.header}>Application</p>
            <p className={styles.pname}>{repo.name}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><button className={styles.gotogit}>Go to GitHub</button></a>
            <p className={styles.desc}>{repo.description}</p>
            <p className={styles.desc}>Upadated on :{repo.updated_at}</p>


        </div>

    </div>
  )
}

export default InfoPage