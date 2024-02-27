import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { serviceListLoading } from '../../redux/slice/serviceListSlice';
import ServiceItem from './ServiceItem/ServiceItem'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

function ServiceList() {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(serviceListLoading())
  }, [])

  let content;

  if (loading) {
    content = <LoadingSpinner />;
  } else if (error) {
    content = <ErrorMessage />;
  } else {
    content = items.map(service => <ServiceItem key={service.id} {...service} />)
  }

  return (
    <div className='service-list'>
      <h1 className='service-list-header'>Наши услуги</h1>
      <div className='service-list-body'>
        {content}
      </div>
    </div>
  )
}

export default ServiceList;