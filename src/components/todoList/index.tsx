import React, { useState, useContext, useMemo } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getTodos, updateTodo, addNewTodo } from '../../api/todo'
import CheckboxComponent from '../checkbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import SwitchComponent from '../switch'
import { AccordionComponent } from '../accordion'
import { ColorBlock } from '../ui/ColorBlock'
import { MainContext } from '../../context/MainContext'
import { CreateTask } from '../createTask'
import moment from 'moment'
import { Todo } from '../../types/todo'

export const TodoList = () => {
  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery('todos', getTodos)
  const { newTask } = useContext(MainContext)
  const [checked, setChecked] = useState(false)

  const todayTask = useMemo(() => {
    if (data) {
      const result = data.filter(
        (i) => moment(i.data).format('DD-MM-YYYY') === moment().format('DD-MM-YYYY'),
      )
      return result
    }
  }, [data])

  const sortByData = useMemo(() => {
    const newData: any = {}
    if (data) {
      data
        .sort((a, b) => new Date(a.data).valueOf() - new Date(b.data).valueOf())
        .forEach((item) => {
          if (newData[item.data]) {
            newData[item.data].push(item)
          } else {
            newData[item.data] = [item]
          }
        })
    }
    return newData
  }, [data])

  console.log('todayTask', todayTask)

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  })

  const doneTodo = (todo: Todo) => {
    updateTodoMutation.mutate({ ...todo, done: !todo.done })
  }

  return (
    <div>
      {newTask && <CreateTask />}
      <CheckboxComponent checked={checked} onChecked={() => setChecked(!checked)} />
      {checked && (
        <Paper
          sx={{
            background: '#282828',
            boxShadow:
              '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
            borderRadius: '40px',
            padding: '0px 16px',
            marginBottom: '32px',
          }}
        >
          <List sx={{ width: '100%' }}>
            {todayTask?.map((item: Todo) => (
              <ListItem sx={{ display: 'flex', paddingLeft: 0 }} key={item.id}>
                <ColorBlock color={item.color} />
                <ListItemText
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: 24,
                      lineHeight: '28px',
                      fontWeight: 600,
                      color: '#F4F4F4',
                      textDecoration: item.done ? 'line-through' : 'none',
                    },
                  }}
                  primary={item.title}
                  secondary={
                    <Typography
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: 14,
                        color: 'rgba(255, 255, 255, 0.6)',
                        textDecoration: item.done ? 'line-through' : 'none',
                      }}
                      component='p'
                      variant='body2'
                      color='#F4F4F4'
                    >
                      {item.description}
                    </Typography>
                  }
                />
                <SwitchComponent checked={item.done} onChange={() => doneTodo(item)} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      <div>
        {Object.keys(sortByData).map((key) => (
          <AccordionComponent
            key={key}
            title={moment(new Date(key)).locale('en').calendar(null, {
              lastDay: `[yesterday]`,
              sameDay: `[today]`,
              lastWeek: 'MM/DD',
              nextWeek: 'dddd',
              sameElse: 'MM/DD',
            })}
          >
            <List sx={{ width: '100%' }}>
              {sortByData[key].map((item: Todo) => (
                <ListItem key={item.id} sx={{ display: 'flex', paddingLeft: 0, paddingRight: 0 }}>
                  <ColorBlock color={item.color} />
                  <ListItemText
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: 24,
                        lineHeight: '28px',
                        fontWeight: 600,
                        color: '#F4F4F4',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        textDecoration: item.done ? 'line-through' : 'none',
                      },
                    }}
                    primary={item.title}
                    secondary={
                      <Typography
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontSize: 14,
                          color: 'rgba(255, 255, 255, 0.6)',
                          textDecoration: item.done ? 'line-through' : 'none',
                        }}
                        component='p'
                        variant='body2'
                        color='#F4F4F4'
                      >
                        {item.description}
                      </Typography>
                    }
                  />
                  <SwitchComponent checked={item.done} onChange={() => doneTodo(item)} />
                </ListItem>
              ))}
            </List>
          </AccordionComponent>
        ))}
      </div>
    </div>
  )
}
