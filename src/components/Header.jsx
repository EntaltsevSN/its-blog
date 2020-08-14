import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header({ showModal, setModalType, hideModal }) {
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  const loginHandler = e => {
    e.preventDefault()

    if(isLoggedIn) {
      showModal()
      setModalType('logout')
    } else {
      showModal()
      setModalType('login')
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">It's Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" className="text-secondary">Главная</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/" className="text-secondary" onClick={e => loginHandler(e)}>
            { isLoggedIn ? `Выйти` : `Войти` }
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header