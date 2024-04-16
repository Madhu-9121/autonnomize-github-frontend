import react,{useState,useEffect} from "react"
import HomePage from './components/HomePage/HomePage'
import InfoPage from "./components/InfoPage/InfoPage"
import Header from "./components/Header/Header"
import './App.css'
function App() {
  const [user,setUser] = useState(null)

  return (
    <div className="App">
      <Header/>
      {/* <div className="inputBarDiv">
        <input className="input" />
      </div> */}
      {/* {user ? <HomePage/>:<InfoPage/>} */}
      
    </div>
  );
}

export default App;
