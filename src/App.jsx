import './App.css'
import { RouterProvider } from 'react-router-dom'
import Wiget from './components/Wiget'
import { router } from './router/router'

function App() {
  return (
    <>
    <RouterProvider router={router}>
      <Wiget />
    </RouterProvider>
    </>
  )
}

export default App;
