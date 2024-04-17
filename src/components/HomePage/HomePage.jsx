import React, { useState } from "react";
import RepoCard from "./RepoCard";
import styles from "./HomePage.module.css";
import InfoPage from "../InfoPage/InfoPage";
import FriendsSlide from "../FriendsSlide/FriendsSlide"
import config from '../../config.json'
const HomePage = ({ repos,userName }) => {
  const [showDesc, setShowDesc] = useState(false);
  const [clickedRepo, setClickedRepo] = useState(null);
  const [showFriends, setShowFriends] = useState(false);
  const [friends,setFriends] =useState([])

  const handleClick = (repo) => {
    setShowDesc(true);
    setClickedRepo(repo);
    console.log(repo)
  };
  const handleShowfriends =async()=>{
    const res =await fetch(`${config.host}/find-friends/${userName}`)
    const friends = await res.json()
    console.log(friends)
    setFriends(friends)
    setShowFriends(true)

  }
  return (
    <div className={styles.upperDiv}>
      {showDesc && clickedRepo ? (
        <InfoPage repo={clickedRepo} setShowDesc={setShowDesc} />
      ) : (
        <>
          

          {showFriends ? <FriendsSlide setShowFriends = {setShowFriends}friends={friends}/>:
          <>
          <button onClick={handleShowfriends} className={styles.friends}>
            Show Friends
          </button>
          <div className={styles.HomePageMain}>
            { repos.length >0 ? repos.map((repo, index) => (
              <RepoCard
                onClick={() => handleClick(repo)}
                style={{ flex: "1 0 30%" }}
                key={index}
                title={repo.name}
                description={repo.description}
                image={""}
                forks_count={repo.forks_count}
                html_url={repo.html_url}
              />
            )): <h1> No Repos Yet</h1>}
          </div>
          </>
          
          }
        </>
      )}
    </div>
  );
};

export default HomePage;
