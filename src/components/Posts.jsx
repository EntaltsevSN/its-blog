import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../components/Post'

function Posts({ showModal, setModalType, setPostId, user, query }) {
  const posts = useSelector(state => state.posts)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const postsList = isLoggedIn 
    ? user.role === 'admin' 
      ? posts 
      : posts.filter(post => post.published === true && post.author === user.login)
    : posts.filter(post => post.published === true)
    
  return (
    <>
      
      { postsList.filter(post => post.body.includes(query)).map(({ id, title, body, date, time, author, published }) => (
        <Post 
          key={id} 
          id={id} 
          title={title} 
          body={body} 
          date={date} 
          time={time} 
          author={author} 
          published={published}
          showModal={showModal} 
          setModalType={setModalType}
          setPostId={setPostId}
          user={user}
        />
      )) }
    </>
  )
}

export default Posts