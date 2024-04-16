import React from 'react'
import styles from './HomePage.module.css'
import projectImg from '../../assets/project.jpg'
const RepoCard = ({title,image,description,html_url,forks_count,onClick}) => {
  return (
    <div className={styles.cardParent} onClick={onClick}>
        <img className={styles.projectImage}src={image ? image:projectImg} alt='project'/>
        {/* <ProjectImg/> */}
        <div style={{textAlign:"left",width:"100%",overflow:"hidden"}}>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardDesc}>{description? description:"description not provided  "}</p>
            <p className={styles.cardDesc}>Forks: {forks_count}</p>
            {/* <p>{html_url}</p> */}
        </div>


    </div>
  )
}

export default RepoCard