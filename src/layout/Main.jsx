import React, { Component } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

export default class Main extends Component {
  state = {
    movies: [],
    isLoading: true,
  }

  handleSubmit = (title, type = 'all') => {
    this.setState({ isLoading: true })
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}${type !== 'all' ? `&type=${type}` : ''}`,
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({ movies: data.Search || [], isLoading: false }),
      )
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then(resp => resp.json())
      .then(data => this.setState({ movies: data.Search, isLoading: false }))
  }

  render() {
    const { movies, isLoading } = this.state

    return (
      <main className="container content">
        <Search handleSubmit={this.handleSubmit} />
        {!isLoading ? <Movies movies={movies} /> : <Preloader />}
      </main>
    )
  }
}
