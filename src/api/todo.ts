import axios from 'axios'
import { Todo } from '../types/todo'

export const baseApi = axios.create({
  baseURL: 'http://localhost:3001',
})

export const newsApi = axios.create({
  baseURL: `https://newsdata.io/api/1/news?apikey=pub_15193b83090d4da2d6b429436b9560e988f0e&q=biden`,
})

export const getNews = async () => {
  const res = await newsApi.get('')
  return res.data.results
}

export const getTodos = async () => {
  const res = await baseApi.get<Todo[]>('/todos')
  return res.data
}

export const addNewTodo = async (todo: any) => {
  return await baseApi.post('/todos', todo)
}

export const updateTodo = async (todo: any) => {
  return await baseApi.patch(`/todos/${todo.id}`, todo)
}

export const deleteTodo = async (todo: any) => {
  return await baseApi.delete('/todos', todo)
}
