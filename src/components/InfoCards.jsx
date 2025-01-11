import { Product } from "./Product"
import { InfoCardsData } from "../constants/InfoCardsData"
export const InfoCards = () => {
    return (
        <div className="productLists-cont">
            <h2>Выберите бренд</h2>
            <div className='product-list'>
                {InfoCardsData.map((item) => (
                    <div className='product-lists' key={item.id}>
                        <Product
                            imgUrl={item.img}
                            title={item.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}