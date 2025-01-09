import { Product } from "./Product"
import '../assets/scss/components/InfoCards.scss'
import apple from '/images/apple.png'
import huavey from "/images/huavey.png"
import redmi from "/images/redmi.png"
export const InfoCards = () => {
    return (
        <div className="productLists-cont">
        <h2>Выберите бренд</h2>
        <div className='product-list'>
            <Product imgUrl={apple} title="Apple" />
            <Product imgUrl={huavey} title="Huawey" />
            <Product imgUrl={redmi} title="Xiaomy" />
            <Product imgUrl={huavey} title="Samsung" />
        </div>
    </div>
    )
}