import React, { FC, useState } from 'react'

type Context = {
  showNews: boolean
  setShowNews: (v: boolean) => void
  newTask: boolean
  setNewTask: (v: boolean) => void
}

export const MainContext = React.createContext<Context>({
  showNews: false,
  setShowNews: (v: boolean) => undefined,
  newTask: false,
  setNewTask: (v: boolean) => undefined,
})

export const MainProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showNews, setShowNews] = useState(false)
  const [newTask, setNewTask] = useState(false)

  return (
    <MainContext.Provider value={{ showNews, setShowNews, newTask, setNewTask }}>
      {children}
    </MainContext.Provider>
  )
}
