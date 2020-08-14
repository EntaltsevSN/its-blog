import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Modal from './components/Modal';
import Header from './components/Header';

function App() {
  const [modalShow, setModalShow] = useState(false)
  const [modalType, setModalType] = useState('')
  const [postId, setPostId] = useState(0)

  const modalHandler = () => setModalShow(true)
  const modalTypeHandler = state => setModalType(state)
  const postIdHandler = id => setPostId(id)

  return (
    <Router>
      <Header 
        showModal={modalHandler} 
        setModalType={modalTypeHandler}
      />
      <Switch>
        <Route path="/" render={props => <Home 
          showModal={modalHandler} 
          setModalType={modalTypeHandler} 
          setPostId={postIdHandler}
        />} />
      </Switch>
      <Modal
        show={modalShow}
        type={modalType}
        setModalType={setModalType}
        onHide={() => setModalShow(false)}
        postId={postId}
      />
    </Router>
  );
}

export default App;
