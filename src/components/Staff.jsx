export const Staff = ({ imgUrl, title, price, price2, price3, button }) => {
    return (
        <div className="staff-list">
            <img className="staff-img" src={imgUrl} alt="" />
            <h4 className="h4-title">{title}</h4>
            <div className="cost">
                <div>
                    <p>Розница:</p>
                    <b>{price}</b>
                </div>
                <div>
                     <p>Оптом (от 5 штук):</p>
                    <b>{price2}</b></div>
                <div>
                     <p>В наличии:</p>
                    <b>{price3}</b></div>
            </div>
           <div className="product-btn">
            <div className="detail-value">
                <button className="plus">+</button>
                <span>95</span>
                <button className="minus">-</button>
            </div>
           <button className="btn">{button}</button>
           </div>

        </div>
    )
}
