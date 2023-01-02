import { FC, useState, useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import { MainContext } from '../../context/MainContext'

export const Head: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { showNews, setShowNews, newTask, setNewTask } = useContext(MainContext)
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleNews = () => {
    setShowNews(!showNews)
    handleClose()
  }

  const toggleNewTask = () => {
    setNewTask(!newTask)
    handleClose()
  }

  return (
    <>
      <AppBar position='static' sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              fontWeight: 400,
              fontSize: '36px',
              lineHeight: '43px',

              color: '#F4F4F4',
            }}
          >
            To Do
          </Typography>
          <div>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <SettingsIcon sx={{ width: '30px', height: '30px' }} />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={toggleNews}>News</MenuItem>
              <MenuItem onClick={toggleNewTask}>New task</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}
