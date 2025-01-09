import { productData } from "../constants/data";
import { Staff } from "./Staff";

export const DetailPack = () => {
    return (
        <div className='detail-pack'>
            {productData.map((item) => (
                <div className='product-lists' key={item.id}>
                    <Staff
                        imgUrl={item.img}
                        title={item.title}
                        price={item.price}
                        old_price={item.old_price}
                    />
                </div>
            ))}
        </div>
    );
};
