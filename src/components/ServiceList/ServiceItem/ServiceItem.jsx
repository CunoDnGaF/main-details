import { NavLink } from "react-router-dom";

function ServiceItem({name, id}) {
  return (
    <NavLink to={`${id}/details`}>
      <div className='service-item'>
        {name}
      </div>
    </NavLink>
  )
}

export default ServiceItem;