import { RouterProvider } from 'react-router-dom'
import router from './routes/index'
import './App.css'

function App(): JSX.Element {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
