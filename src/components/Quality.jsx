export const Quality = ({ imgUrl, title }) => {
    return (
      <div className="product-item">
        <img  className = 'info-image'src={`/img/${imgUrl}.png`} alt="" />
        <p>{title}</p>
      </div>
    )
  } 