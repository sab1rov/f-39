import { Staff } from "./Staff";
import "../assets/scss/components/DetailPack.scss";
import detail from "/images/detail.png";

export const DetailPack = () => {
    return (
        <div className='detail-pack'>
            <div className='product-lists'>
                <Staff
                    imgUrl={detail}
                    title='iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал'
                    price='950'
                    price2='750'
                    price3=' 2500'
                    button='В корзину'
                />
            </div>
            <div className='product-lists'>
                <Staff
                    imgUrl={detail}
                    title='iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал'
                    price='950'
                    price2='750'
                    price3=' 2500'
                    button='В корзину'
                />
            </div>
            <div className='product-lists'>
                <Staff
                    imgUrl={detail}
                    title='iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал'
                    price='950'
                    price2='750'
                    price3=' 2500'
                    button='В корзину'
                />
            </div>
            <div className='product-lists'>
                <Staff
                    imgUrl={detail}
                    title='iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал'
                    price='950'
                    price2='750'
                    price3=' 2500'
                    button='В корзину'
                />
            </div>
        </div>
    );
};
