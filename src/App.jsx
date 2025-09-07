import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Banner from './components/Banner'
function App() {
  const [watchlist,setWatchList]=useState([])

  const addWatchList=(movieobj)=>{
    //create new watchList and assign previous watchlist(using spreding)
    let newWatchList=[...watchlist,movieobj]
    //console.log(newWatchList)
    localStorage.setItem("moviesApp",JSON.stringify(newWatchList))
    setWatchList(newWatchList)
  }
  //remove from watch
  const deleteWatchList=(movieobj)=>{ //movieobj to delete
    // whene evere the object in watch list is equal to movieobj then it will not return it
    let filteredwatchlist=watchlist.filter((movie)=>{
      return movie.id!==movieobj.id
    })
    localStorage.setItem("moviesApp",JSON.stringify(filteredwatchlist))
    //console.log(filteredwatchlist)
    setWatchList(filteredwatchlist)
  }
 // console.log(watchlist)
 useEffect(()=>{
  let moviesFromLocalStorage=localStorage.getItem("moviesApp")
  if(!moviesFromLocalStorage){
    return;
  }
  setWatchList(JSON.parse(moviesFromLocalStorage))
 },[])
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<><Banner/><Movies watchlist={watchlist} addWatchList={addWatchList} deleteWatchList={deleteWatchList}/></>}/>
        <Route path='/WatchList' element={<WatchList watchlist={watchlist} deleteWatchList ={deleteWatchList} setWatchList={setWatchList}/>}/>
      </Routes>
    </Router> 
    </>
  )
}

export default App
