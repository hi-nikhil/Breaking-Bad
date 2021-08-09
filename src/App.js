import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Cast from './Cast'
import Header from './components/ui/header'
import Table from './components/table/Table'
import Pagination from './components/table/Pagination'
import Search from './components/ui/Search'
import Spinner from './components/ui/Spinner'


function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const [query, SetQuery] = useState('')




  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  //Get current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost)


  //change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/cast' >
            <Cast />
          </Route>
          <Route path='/' >
            <Header />
            <Link to='/cast'>
            <div className="goto">
              <p>Know them...</p>
            </div>
            </Link>
            
            <Search getQuery={(q) => SetQuery(q)} />
            <Table items={currentPosts} loading={isLoading} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={items.length}
              paginate={paginate}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
