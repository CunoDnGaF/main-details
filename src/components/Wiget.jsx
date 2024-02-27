import { Outlet } from 'react-router-dom'

function Wiget() {
  return (
    <div className="wiget">
      <Outlet />
    </div>
  )
}

export default Wiget;