import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

const App = () => {
  return (
    <>
      <UserList/>
      <hr/>
      <TodoList/>
    </>
  )
}

export default App;