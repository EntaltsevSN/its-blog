import React from 'react'
import { Form } from 'react-bootstrap'

function Search({ query, setQuery }) {
  return (
    <Form inline className="mb-4">
      <Form.Group className="w-100">
        <Form.Label className="mr-4">Поиск новостей</Form.Label>
        <Form.Control
          className="col"
          type="search"
          placeholder="Введите ключевые слова"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Form.Group>
    </Form>
  )
}

export default Search