import chexol from '/public/images/chexol.png'
import power from '/public/images/power.png'

export function Banners() {
    return (
        <>
            <div className="section_1_slider">
                <div className="section_1_card_1">
                    <b className='section_1_text'>
                        Защитное стекло на
                        <br /> iPhone 11 pro
                        <br />по лучшей цене!
                    </b>
                    <button className="section_item_button">Подробнее</button>
                </div>
                <div className="section_2_card_2">
                    <div className="section_2_item">
                        <div className="section_2_info">
                                <b className='section_2_item_text'>
                                    Selicone case
                                     <br /> для iPhone Xr
                                </b>
                            <button className="section_2_item_button">Подробнее</button>
                        </div>
                        <img className='section_2_img' src={chexol} alt="" />
                    </div>  

                    <div className="section_2_item">
                        <div className="section_2_info">
                        <b className='section_2_item_text'>
                            PowerBank от Xiaomi
                            <br /> на 10 800 мА•ч
                        </b>
                        <button className="section_2_item_button">Подробнее</button>
                        </div>
                        <img className='section_2_img' src={power} alt="" />

                    </div>

                </div>
            </div>

        </>
    )
}