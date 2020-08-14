import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Posts from '../components/Posts'
import { useState } from 'react'
import Search from '../components/Search'

function Home({ showModal, setModalType, setPostId }) {
  const users = useSelector(state => state.users)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const user = isLoggedIn ? users.filter(user => user.authorized === true)[0] : false
  const login = isLoggedIn ? user.login : `гость`
  const [query, setQuery] = useState('')

  const addPostHandler = e => {
    e.preventDefault()

    showModal()
    setModalType('add')
  }

  return ( 
    <Container className="p-4">
      <h3 className="mb-4 d-flex justify-content-between align-items-center">
        <span>{ isLoggedIn ? `Привет ${login}` : `Здравствуйте! Войдите на сайт, чтобы поделиться новостями` }</span>
        { isLoggedIn && user.role === 'user'
          ? <Button variant="primary" onClick={e => addPostHandler(e)}>Добавить новость</Button> : `` }
      </h3>
      <Search query={query} setQuery={setQuery} />
      <Posts showModal={showModal} setModalType={setModalType} setPostId={setPostId} user={user} query={query} />
    </Container>
  )
}

export default Home