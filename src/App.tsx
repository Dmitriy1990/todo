import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { TodoList } from './components/todoList'
import { Head } from './components/head'
import { News } from './components/news'
import { MainProvider } from './context/MainContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainProvider>
        <div className='container'>
          <Head />
          <TodoList />
        </div>
        <News />
      </MainProvider>
    </ThemeProvider>
  )
}

export default App
