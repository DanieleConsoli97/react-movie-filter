import { useState,useEffect } from 'react'
import './App.css'
import Films from './Data/Films'


function App() {

const [filterFilm,setFilterFilm]=useState(Films)
const [genereFilm,setGenereFilm]=useState("")
const [title,setTitle]=useState("")

useEffect(()=>{
 if (genereFilm!=="") {
  const ricercaGenere=Films.filter((film)=> film.genre===genereFilm)
  setFilterFilm(ricercaGenere)
 }else{
  setFilterFilm(Films)
 }
},[genereFilm])
useEffect(()=>{
  if(title!==""){
    const ricercaTitolo = Films.filter((film)=>film.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))  
    console.log(title)
    setFilterFilm(ricercaTitolo)
  }else{
    setFilterFilm(Films)
  }
},[title])

  return (
    <>
    <input type="text" onChange={(e)=>{setTitle(e.target.value)}} name="" id="" />
   <select name="" id="" onChange={(e)=>{setGenereFilm(e.target.value)}}>
    <option value="">Tutti i film</option>
    <option value="Fantascienza">Fantascienza</option>
    <option value="Thriller">Thriller</option>
    <option value="Romantico">Romantico</option>
    <option value="Azione">Azione</option>
   </select>
    <ul>
      {
       filterFilm.map((film,i)=>{ 
        return(<li key={i}>{film.title} - {film.genre}</li>) 
        })
      }
      </ul>
    </>
  )
}

export default App
