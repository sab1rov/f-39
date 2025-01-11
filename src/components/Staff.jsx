export const Staff = ({ imgUrl, title, price, old_price }) => {
    return (
        <div className='staff-list'>
            <img className='staff-img' src={imgUrl} alt='' />
            <h4 className='h4-title'>{title}</h4>
            <div className='cost'>
                <div>
                    <p>Price:</p>
                    <b>{price}</b>
                </div>
                <div>
                    <p>Old price:</p>
                    <b>{old_price}</b>
                </div>
            </div>
            <div className='product-btn'>
                <div className='detail-value'>
                    <button className='plus'>+</button>
                    <span>95</span>
                    <button className='minus'>-</button>
                </div>
                <button className='detail-pack-button'>Add to Cart</button>
            </div>
        </div>
    );
};
