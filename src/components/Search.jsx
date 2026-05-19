import { useState } from 'react'

export default function Search(props) {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')
  const { handleSubmit = Function.prototype } = props

  const handleFilter = e => {
    if (search.trim()) {
      setType(e.target.dataset.type)
      handleSubmit(search, e.target.dataset.type)
    }
  }

  const handleKey = e => {
    if (search.trim()) {
      if (e.key === 'Enter') {
        handleSubmit(search, type)
      }
    }
  }

  const handleChange = e => setSearch(e.target.value)

  return (
    <div className="input-field">
      <input
        placeholder="Search your movie..."
        id="movie"
        type="search"
        className="validate"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKey}
      />
      <form className="radios" action="#">
        <label>
          <input
            className="with-gap"
            name="type"
            data-type="all"
            onChange={handleFilter}
            checked={type === 'all'}
            type="radio"
          />
          <span>All categories</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            data-type="movie"
            onChange={handleFilter}
            checked={type === 'movie'}
            type="radio"
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            data-type="series"
            onChange={handleFilter}
            checked={type === 'series'}
            type="radio"
          />
          <span>Series only</span>
        </label>
      </form>
    </div>
  )
}
