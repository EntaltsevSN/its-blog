import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import LoginForm from './LoginForm'
import Confirm from './Confirm'
import Editor from './Editor'

function itsModal(props) {
  const typeHandler = type => {
    switch(type) {
      case `add`: return `Новая новость`
      case `edit`: return `Редактирование новости`
      case `remove`: return `Вы действительно хотите удалить новость?`
      case `publish`: return `Вы действительно хотите опубликовать новость?`
      case `unpublish`: return `Вы действительно хотите снять новость с публикации?`
      case `login`: return `Вход на сайт`
      case `logout`: return `Вы действительно хотите покинуть сайт?`
      default: return `Заголовок модального окна`
    }
  }

  return (
    <Modal
      show={props.show}
      type={props.type}
      id={props.id}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{typeHandler(props.type)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { 
          props.type === 'login' 
            ? <LoginForm hideModal={props.onHide} setModalType={props.setModalType} /> 
            : props.type === 'logout' || props.type === 'publish' || props.type === 'unpublish' || props.type === 'remove'
              ? <Confirm 
                hideModal={props.onHide} 
                setModalType={props.setModalType} 
                type={props.type} 
                postId={props.postId} />
              : props.type === 'add' || props.type === 'edit'
                ? <Editor
                  hideModal={props.onHide} 
                  setModalType={props.setModalType} 
                  type={props.type} 
                  postId={props.postId}
                /> : ``
        }
      </Modal.Body>
      {/*<Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>*/}
    </Modal>
  )
}

export default itsModal