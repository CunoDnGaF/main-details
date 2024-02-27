import { useEffect } from 'react'
import { serviceLoading } from '../../redux/slice/serviceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ServiceDetailsItem from './ServiceDetailsItem/ServiceDetailsItem';

function ServiceDetails() {
  const { item, loading, error } = useSelector(state => state.service);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(serviceLoading(id))
  }, [])

  let content; 
  
  if (loading) {
    content = <LoadingSpinner />;
  } else if (error) {
    content = <ErrorMessage id={id} />;
  } else if (item) {
    content = <ServiceDetailsItem key={item.id} {...item} />
  }

  return (
    <div className='service'>
      <NavLink to={`/`} className="service-btn">
        <span>Назад</span>
      </NavLink>
      {content}
    </div>
  )
}

export default ServiceDetails;