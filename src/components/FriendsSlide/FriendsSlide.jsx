import React, { useState } from "react";
import RepoCard from "../HomePage/RepoCard";
import config from "../../config.json";
import styles from "./FriendsSlide.module.css";
const FriendsSlide = ({ friends, setShowFriends }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [showFriednsRepo,setShowFriendsRepo] = useState(false)
  const handleClick = async (friend) => {
    console.log("called", friend);
    if (friend && friend.userName) {
      const { userName } = friend;
      console.log(userName);
      const repos = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const responseData = await repos.json();
      console.log(responseData);
      setUserInfo(responseData);
      setShowFriendsRepo(true)
    }
  };
  const handleBack = () => {
    setShowFriends(false);
  };
  const goBackTOFriends =()=>{
    setShowFriendsRepo(false)
  }
  return (
    <>
    {
        showFriednsRepo ? (<>
         <button onClick={goBackTOFriends} className={styles.goback}>
              {"<"} Go Back
            </button>
        <div className={styles.cardsParent}>
            {
                userInfo.map((item,index)=> <RepoCard title={item.name} description={item.description} forks_count={item.forks_count}/>)
            }
        </div></>) :(<div>
            <button onClick={handleBack} className={styles.goback}>
              {"<"} Go Back
            </button>
            <div className={styles.cardsParent}>
              {friends.length > 0 ? (
                friends.map((friend, index) => (
                  <div
                  onClick={() => handleClick(friend)}
                    style={{ marginBottom: "20px" }}
                  >
                    <RepoCard
                      key={index}
                      title={friend.userName}
                      image={friend.image}
                      forks_count={0}
                    />
                  </div>
                ))
              ) : (
                <h1>No Friends</h1>
              )}
             
            </div>
          </div>)
    }
    </>
  );
};

export default FriendsSlide;
