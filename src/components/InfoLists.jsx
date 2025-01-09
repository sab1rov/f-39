import { Infoimg } from "./info"
import safe from '/images/safe.png'
import factory from '/images/factory.png'
import sale from '/images/sale.png'
import diamond from '/images/diamond.png'
import broke from '/images/broke.png'

export const InfoLists = () => {
    return (
        
        <div className="info-lists">
        <div className="info-list">
            <Infoimg imgUrl={sale} title='Достойные  цены' />
            <p className="product-text">Достойные  цены</p>
        </div>
        <div className="info-list">
            <Infoimg imgUrl={safe}  title='Даем горантии от 1 года' />
            <p className="product-text">Даем горантии от 1 года</p>
        </div>
        <div className="info-list">
            <Infoimg imgUrl={factory} title='Работаем напрямую
            с производителями' />
            <p className="product-text">Работаем напрямую
            с производителями</p>
        </div>
        <div className="info-list">
            <Infoimg imgUrl={diamond} title='Контроль качества
            продукции' />
            <p className="product-text">Контроль качества
            продукции</p>
        </div>
        <div className="info-list">
            <Infoimg imgUrl={broke} title='Процент брака
            сведён к минимуму' />
            <p className="product-text">Процент брака
            сведён к минимуму</p>
        </div>
    </div>
    )
}