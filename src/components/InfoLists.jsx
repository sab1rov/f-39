import { Infoimg } from "./info"
import safe from '/images/safe.png'
import factory from '/images/factory.png'
import sale from '/images/sale.png'
import diamond from '/images/diamond.png'
import broke from '/images/broke.png'
import { infoLists } from "../constants/infoLists"

export const InfoLists = () => {
    return (
        <div className="info-lists">
        {infoLists.map((item) => (
                <div className='info-list' key={item.id}>
                    <Infoimg
                        imgUrl={item.img}
                        title={item.title}
                    />
                </div>
            ))}
    </div>
    )
}