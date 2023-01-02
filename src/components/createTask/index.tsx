import React, { useState, useId, useContext } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { addNewTodo } from '../../api/todo'
import { getRandomColor } from '../../utils'
import { MainContext } from '../../context/MainContext'

export const CreateTask = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState('')
  const queryClient = useQueryClient()
  const id = useId()
  const { setNewTask } = useContext(MainContext)

  const addTodoMutation = useMutation(addNewTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  })

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    func: (s: string) => void,
  ) => {
    const { value } = e.target
    func(value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodoMutation.mutate({
      id,
      title,
      description: desc,
      done: false,
      color: getRandomColor(),
      data: date,
    })
    setTitle('')
    setDesc('')
    setDate('')
    setNewTask(false)
  }

  return (
    <Box
      onSubmit={onSubmit}
      component='form'
      sx={{
        background: '#F4F4F4',
        margin: '0 auto',
        padding: '30px 0 10px',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-basic'
        label='Title'
        variant='outlined'
        onChange={(e) => onChange(e, setTitle)}
      />
      <TextField
        id='filled-basic'
        label='Desc'
        variant='outlined'
        onChange={(e) => onChange(e, setDesc)}
      />
      <TextField
        id='standard-basic'
        label='Standard'
        variant='outlined'
        type='date'
        focused
        onChange={(e) => setDate(e.target.value)}
      />
      <Button
        variant='contained'
        size='large'
        disabled={!date || !title || !desc}
        type='submit'
        sx={{ display: 'flex' }}
      >
        Add new taks
      </Button>
    </Box>
  )
}
