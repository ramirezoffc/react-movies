import React, { Component } from 'react'

export default class Search extends Component {
  state = {
    search: '',
    type: 'all',
  }

  handleFilter = e => {
    if (this.state.search.trim()) {
      this.setState(
        () => ({ type: e.target.dataset.type }),
        () => {
          this.props.handleSubmit(this.state.search, this.state.type)
        },
      )
    }
  }

  handleKey = e => {
    if (this.state.search.trim()) {
      if (e.key === 'Enter') {
        this.props.handleSubmit(this.state.search, this.state.type)
      }
    }
  }

  handleChange = e => this.setState({ search: e.target.value })

  render() {
    const { search } = this.state

    return (
      <div className="input-field">
        <input
          placeholder="Search your movie..."
          id="movie"
          type="search"
          className="validate"
          value={search}
          onChange={this.handleChange}
          onKeyDown={this.handleKey}
        />
        <form className="radios" action="#">
          <label>
            <input
              className="with-gap"
              name="type"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
              type="radio"
            />
            <span>All categories</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
              type="radio"
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
              type="radio"
            />
            <span>Series only</span>
          </label>
        </form>
      </div>
    )
  }
}
