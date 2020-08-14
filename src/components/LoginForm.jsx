import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, authorizeUser } from '../redux/actions'

function LoginForm({ hideModal, setModalType }) {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    
    const correctUser = users.filter(user => user.login === login && user.password === password)[0]

    if(correctUser) {
      dispatch(loginUser())
      dispatch(authorizeUser(correctUser.id))
      hideModal()
      setModalType('')
    } else {
      errorHandler()
    }

  }

  const errorHandler = () => console.log('error')

  return (
    <Form onSubmit={e => submitHandler(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Имя пользователя</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Введите имя пользователя" 
          value={login}
          onChange={e => setLogin(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Введите пароль" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">Войти</Button>
    </Form>
  )
}

export default LoginForm