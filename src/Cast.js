import React,{useState,useEffect} from 'react'
import './Cast.css'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './components/ui/header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

function Cast({}) {
    const [items,setItems ]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [query,setQuery]=useState('')
    

  
  
    useEffect(() =>{
        const fetchItems=async() =>{
            const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()  
    },[query])

    return (
        <div className='container'>
           <Header/>
           <Link to='/'>
            <div className="home_link">
              <p>Home</p>
            </div>
            </Link>
           <Search getQuery={(q) =>setQuery(q) } />
           <CharacterGrid isLoading={isLoading} items={items} />
        </div>
    )
}

export default Cast
