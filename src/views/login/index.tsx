import TextField from '@mui/material/TextField'
import Button from '@mui/material-next/Button'
import Divider from '@mui/material/Divider'
import GitHubIcon from '@mui/icons-material/GitHub'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
const Login: React.FC = () => {
  const githubClientId: string = import.meta.env.VITE_GITHUB_CLIENT_ID
  const githubRedirectUrl: string = import.meta.env.VITE_GITHUB_REDIRECT_URI
  const githubLoginUrl: string = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${githubRedirectUrl}`

  const handleGithubBtnClick = (): void => {
    console.log('github login')
    console.log(githubLoginUrl)
  }

  const handleLoginBtnClick = (): void => {
    console.log('nromal login')
  }
  return (
    <div className='h-screen w-screen flex bg-slate-50 justify-center items-center'>
      <div className='h-[400px] w-[450px] bg-white rounded-lg p-8 flex flex-col drop-shadow-lg'>
        <div className='w-full flex justify-center pb-4 text-base font-semibold'>Blog System</div>
        <div className='mt-4 flex grow flex-col gap-4'>
          <TextField id='outlined-account-input' label='Account' />
          <TextField id='outlined-password-input' label='Password' type='password' autoComplete='current-password' />
          <Button color='primary' size='medium' variant='filled' onClick={handleLoginBtnClick}>
            Login
          </Button>
          <div className='w-full flex justify-center font-medium text-sm underline underline-offset-2'>
            <Link to='/forgot'>Forgot password?</Link>
          </div>
        </div>
        <div className='footer mt-2'>
          <Divider>
            <div className='text-black text-opacity-40 text-xs'>Other</div>
          </Divider>
          <div className='flex flex-row gap-4 justify-center mt-2'>
            <a onClick={handleGithubBtnClick} href={githubLoginUrl}>
              <IconButton color='primary'>
                <GitHubIcon className='cursor-pointer'></GitHubIcon>
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
