import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import CKEditor from 'ckeditor4-react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, editPost } from '../redux/actions'

function Editor({ postId, type, hideModal, setModalType }) {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const user = isLoggedIn ? users.filter(user => user.authorized === true)[0] : false
  const posts = useSelector(state => state.posts)
  const currentPost = posts.filter(post => post.id === postId)[0]

  const [postBody, setPostBody] = useState(type === 'edit' ? currentPost.body : ``)
  const [postTitle, setPostTitle] = useState(type === 'edit' ? currentPost.title : ``)

  const d = new Date()
  const DD = d.getDate()
  const MM = (d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
  const YYYY = d.getFullYear()
  const hh = d.getHours()
  const mm = d.getMinutes()

  const submitHandler = e => {
    e.preventDefault()

    if(type === 'add') {
      hideModal()
      setModalType('')
      dispatch(addPost({
        id: posts.length + 1,
        title: postTitle,
        body: postBody,
        date: `${DD}.${MM}.${YYYY}`,
        time: `${hh}:${mm}`,
        author: user.login,
        published: false
      }))
    } else if(type === 'edit') {
      hideModal()
      setModalType('')
      dispatch(editPost({
        id: currentPost.id,
        title: postTitle,
        body: postBody,
        date: currentPost.date,
        time: currentPost.time,
        author: currentPost.author,
        published: currentPost.published
      }))
    }
  }

  function onChangeTitle(e) {
    setPostTitle(e.target.value)
  }

  function onChangeBody(e) {
    setPostBody(e.editor.getData())
  }

  return (
    <Form onSubmit={e => submitHandler(e)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Название новости</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Введите имя пользователя" 
          value={postTitle}
          onChange={e => onChangeTitle(e)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Текст новости</Form.Label>
        <CKEditor data={postBody} onChange={e => onChangeBody(e)} />
      </Form.Group>

      <Button variant="primary" type="submit">Сохранить</Button>
    </Form>
  )
}

export default Editor