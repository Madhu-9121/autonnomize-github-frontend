import react,{useState,useEffect} from "react"
import HomePage from './components/HomePage/HomePage'
import InfoPage from "./components/InfoPage/InfoPage"
import Header from "./components/Header/Header"
import './App.css'
import config from './config.json'
// console.log(config.host)
function App() {
  const [user,setUser] = useState("Madhu-9121")
  const [accountName,setAccountName] = useState('')
  const [repos,setRepos] = useState([])
  const handleSearch=async()=>{
    if(user){
     try{ 
      const res = await fetch(`${config.host}/save-user/${user}`)
      const repos = await fetch(`https://api.github.com/users/${user}/repos`)
      const responseData = await res.json()
      const reposData = await repos.json()
      setRepos(reposData)
      setAccountName(responseData.name)
      console.log(responseData,reposData)
    }
      catch(e){console.log(e)}

    }
  }

  return (
    <div className="App">
      <Header setUser= {setUser} user={user} accountName={accountName} handleSearch={handleSearch}/>
      <div className="details">
      { accountName ? <HomePage repos={repos}/>:(<div className="inputBarDiv">
        <div className="common">
        <input className="input" placeholder="Enter User Name Here" value={user} onChange={(e)=>setUser(e.target.value)}/>
        <button className="submitButton" onClick={handleSearch}>Search</button>
        </div>
         </div>)}
      {/* :<InfoPage/>} */}

      </div>
      
      
    </div>
  );
}

export default App;
