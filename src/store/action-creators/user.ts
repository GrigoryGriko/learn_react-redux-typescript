import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"
import axios from 'axios';


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USERS,
      })

      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS, payload: res.data,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей'
      })
    }
  }
}