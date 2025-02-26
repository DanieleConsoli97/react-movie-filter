import { useState,useEffect } from 'react'
import './App.css'
import Films from './Data/Films'


function App() {

const [filterFilm,setFilterFilm]=useState(Films)
const [genereFilm,setGenereFilm]=useState("")
useEffect(()=>{
 if (genereFilm!=="") {
  const FilmFiltrati=Films.filter((film)=> film.genre===genereFilm)
  setFilterFilm(FilmFiltrati)
 }else{
  setFilterFilm(Films)
 }
},[genereFilm])
  return (
    <>
   <select name="" id="" onChange={(e)=>{setGenereFilm(e.target.value)}}>
    <option value="">Tutti i film</option>
    <option value="Fantascienza">Fantascienza</option>
    <option value="Thriller">Thriller</option>
    <option value="Romantico">Romantico</option>
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
