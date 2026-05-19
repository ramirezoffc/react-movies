import { useState, useEffect } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

export default function Main() {
  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(true)

  const handleSubmit = (title, type = 'all') => {
    setLoading(true)
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}${type !== 'all' ? `&type=${type}` : ''}`,
    )
      .then(resp => resp.json())
      .then(data => {
        setMovies(data.Search || [])
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then(resp => resp.json())
      .then(data => {
        setMovies(data.Search)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <main className="container content">
      <Search handleSubmit={handleSubmit} />
      {!isLoading ? <Movies movies={movies} /> : <Preloader />}
    </main>
  )
}
