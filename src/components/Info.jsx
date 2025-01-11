export const Infoimg = ({ imgUrl,title}) => {
  return (
    <div className="product-item">
      <img className="info-card" src={imgUrl} alt="" />
      <p>{title}</p>
    </div>
  )
} 