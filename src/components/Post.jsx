import React from 'react'
import { Card, Button } from 'react-bootstrap'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

function Post({ id, title, body, date, time, author, published, showModal, setModalType, setPostId, user }) {
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const togglePostHandler = e => {
    e.preventDefault()

    if(published) {
      showModal()
      setModalType('unpublish')
      setPostId(id)
    } else {
      showModal()
      setModalType('publish')
      setPostId(id)
    }
  }

  const removePostHandler = e => {
    e.preventDefault()

    showModal()
    setModalType('remove')
    setPostId(id)
  }

  const editPostHandler = e => {
    e.preventDefault()

    showModal()
    setModalType('edit')
    setPostId(id)
  }

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <div className="card-text">{ parse(body) }</div>
        <div className="pt-3 border-top">
          <span className="font-italic text-secondary">
            Добавлено <strong>{ author }</strong> {date} в {time}
          </span>
        </div>
        {isLoggedIn ? <div className="pt-3">
          { user.role === 'admin' ? <Button 
            className="mr-4"
            variant={ published ? `warning` : `success` } 
            onClick={e => togglePostHandler(e)}
          >
            { published ? `Сделать черновиком` : `Опубликовать` }
          </Button> : `` }
          <Button variant="secondary" className="mr-4" onClick={e => editPostHandler(e)}>Редактировать</Button>
          <Button variant="link" onClick={e => removePostHandler(e)}>Удалить</Button>
        </div> : ``}
      </Card.Body>
    </Card>
  )
}

export default Post