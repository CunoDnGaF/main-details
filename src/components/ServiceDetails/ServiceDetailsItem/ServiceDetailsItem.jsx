function ServiceDetailsItem({name, price, content}) {
  return (
    <>
      <h1 className="service-name">{name}</h1>
      <span className='service-content'>{content}</span>
      <span className="service-price">{price} ₽</span>
    </>
  )
}

export default ServiceDetailsItem;