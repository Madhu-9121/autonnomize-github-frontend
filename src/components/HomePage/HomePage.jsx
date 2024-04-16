import React, { useState } from 'react'
import RepoCard from './RepoCard'
import styles from './HomePage.module.css'
import InfoPage from '../InfoPage/InfoPage'
const HomePage = ({repos}) => {
    const [showDesc,setShowDesc] =useState(false)
    const handleClick=(repo)=>{
        setShowDesc(true)
        console.log(repo)

    }
  return (  
    <div>
        {showDesc ? <InfoPage/>:
        <div className={styles.HomePageMain}>
        {repos.map((repo,index)=> <RepoCard onClick={()=>handleClick(repo)} style={{ flex: '1 0 30%' }}  key={index} title={repo.name} description={repo.description} image={""} forks_count={repo.forks_count} html_url={repo.html_url}/>)}
    </div>}

    </div>
    
  )
}

export default HomePage