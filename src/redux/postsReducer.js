import { ADD_POST, EDIT_POST, REMOVE_POST, TOGGLE_POST } from "./types"

const initState = [
  {
    id: 1,
    title: 'What is React?',
    body: '<p>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>',
    date: '13.08.2020',
    time: '19:26',
    author: 'Stan',
    published: true
  },
  {
    id: 2,
    title: 'What is Redux?',
    body: '<p>Redux is a predictable state container for JavaScript apps.</p><p>It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.</p><p>You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.</p>',
    date: '13.08.2020',
    time: '19:53',
    author: 'Stan',
    published: false
  }
]

export const posts = (state = initState, { type, data }) => {
  switch(type) {
    case ADD_POST:
      return [...state, data]
    case TOGGLE_POST:
      return [...state.map(post => post.id === data ? {...post, published: !post.published} : post)]
    case EDIT_POST:
      return [...state.map(post => post.id === data.id ? data : post)]
    case REMOVE_POST:
      return [...state.filter(post => post.id !== data)]
    default:
      return state
  }
}