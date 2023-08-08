import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import InputBase from '@mui/material/InputBase'
import MuiDrawer from '@mui/material/Drawer'
import { useCallback, useState } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import StarBorder from '@mui/icons-material/StarBorder'
import clsx from 'clsx'
const Home: React.FC = () => {
  const [isExpendMenu, setExpendMenu] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const expendMenuBtnClick = useCallback(() => {
    setExpendMenu(!isExpendMenu)
  }, [isExpendMenu])

  const handleClick = (): void => {
    setOpen(!isOpen)
    console.log(123)
  }

  return (
    <div className='flex flex-row w-full h-full'>
      <MuiDrawer
        className={clsx(
          'h-full bg-white shrink-0  whitespace-nowrap box-border',
          isExpendMenu && 'w-[300px] transition-all duration-300',
          !isExpendMenu && 'w-0 transition-all duration-300',
        )}
        variant='persistent'
        anchor='left'
        open={isExpendMenu}
        sx={{
          '.MuiDrawer-paper': {
            width: '300px',
            transitionDuration: '300ms !important',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1) !important',
          },
        }}
      >
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isOpen} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Starred' />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </MuiDrawer>
      <div className={clsx('grow flex flex-col')}>
        <Box className='flex w-full'>
          <AppBar position='static' className='flex flex-grow'>
            <Toolbar>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                className='mr-2'
                onClick={expendMenuBtnClick}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant='h6' component='div'>
                Admin
              </Typography>

              <div className='grow'>
                <div className='relative rounded-lg bg-white bg-opacity-20 mx-4 h-[38px] w-[300px]  transition-all hover:bg-opacity-30 '>
                  <div className='flex h-full items-center ml-4'>
                    <SearchIcon />
                    <InputBase
                      placeholder='Search…'
                      inputProps={{ 'aria-label': 'search' }}
                      className='ml-2 !text-white grow pr-4 '
                    />
                  </div>
                </div>
              </div>
              <Link to='/login'>
                <Button color='inherit'>Login</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        <div className='grow'>content</div>
      </div>
    </div>
  )
}

export default Home
