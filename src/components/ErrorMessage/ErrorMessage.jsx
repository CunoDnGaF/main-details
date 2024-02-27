import { useDispatch } from 'react-redux'
import { serviceLoading } from '../../redux/slice/serviceSlice';
import { serviceListLoading } from '../../redux/slice/serviceListSlice';

function ErrorMessage({ id }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(id ? serviceLoading(id) : serviceListLoading());
  }

  return (
    <div className='error-message'>
      Произошла ошибка!
      <button className='error-btn' onClick={handleClick}>Повторить запрос</button>
    </div>
  )
}

export default ErrorMessage;