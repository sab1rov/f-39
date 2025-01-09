
export const Product = ({imgUrl, title}) => {
  return (
    <div className="product-item">
        <img className="sale" src={imgUrl} alt="" />
       <div className="product-title ">
       <h4 className="productTitle">{title}</h4>
       <a className="productArrow">{"=>"}</a>
       </div>
        
    </div>
  )
}
