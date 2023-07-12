import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo"
import axios from 'axios';


export const fetchTodo = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.FETCH_TODOS})

      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
          params: {
            _page: page,
            _limit: limit
          } 
        }
      )
      setTimeout(() => {
        dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: res.data}) 
      }, 50) 
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'Произошла ошибка при загрузке списка дел'
      })
    }
  }
}
export function setTodoPage(page: number): TodoAction {
  return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}