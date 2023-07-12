import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {
  const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
  const {fetchTodo, setTodoPage} = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodo(page, limit)
  }, [page])


  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo =>
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>  
      )}
      <div style={{display: 'flex'}}>
        {pages.map(p =>
          <div
          onClick={() => setTodoPage(p)}
            style={{
              boxSizing: 'border-box',
              border: p === page ? '4px solid blue' : '1px solid gray',
              padding: '5px',
              cursor: 'pointer'
            }}
          >
            {p}
          </div>  
        )}
      </div>
    </div>
  );
};

export default TodoList;