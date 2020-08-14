import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutUser, togglePost, removePost } from '../redux/actions'

function Confirm({ hideModal, setModalType, type, postId }) {
  const dispatch = useDispatch()
  const submitHandler = e => {
    e.preventDefault()

    hideModal()
    setModalType('')

    if(type === 'logout') {
      dispatch(logoutUser())
    } else if(type === 'publish' || type === 'unpublish') {
      console.log(postId);
      dispatch(togglePost(postId))
    } else if(type === 'remove') {
      console.log(postId)
      dispatch(removePost(postId))
    }
  }

  return (
    <div className="text-center">
      <Button className="mr-2" variant="secondary" onClick={e => hideModal()}>Нет</Button>
      <Button className="ml-2" variant="primary" onClick={e => submitHandler(e)}>Да</Button>
    </div>
  )
}

export default Confirm