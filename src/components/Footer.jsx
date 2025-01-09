import logo from '/public/images/logoo.png'
import vk from '/public/images/vk.png'
import inst from '/public/images/inst.png'
import call from '/public/images/call.png'
import mir from '/public/images/mir.png'
import visa from '/public/images/visa.png'
import mcard from '/public/images/mcard.png'
import master from '/public/images/master.png'
import bumer from '/public/images/bumerang.png'



export function Footer(){
    return(
        <footer className="footer">
            <div className="foter_inner_container">

                <div className="navigation_2">
                <img className='footer_logo' src={logo} alt="" />
                <div className="navigation">
                    <h3 className="navigation_h3">НАВИГАЦИЯ</h3>
                    <ul className="navigation_ul">
                        <a href="#" className="ul_text">О компании</a>
                        <a href="#" className="ul_text">Доставка и оплата</a>
                        <a href="#" className="ul_text">Гарантии</a>
                        <a href="#" className="ul_text">Контакты</a>
                    </ul>
                </div>

                <div className="navigation">
                    <h3 className="navigation_h3">КОНТАКТЫ</h3>
                    <ul className="navigation_ul">
                        <a href="#" className="ul_text">
                             <img src={vk} alt="" />
                             vk.com/*long_link*</a>
                        <a href="#" className="ul_text">
                            <img src={inst} alt="" />
                            @*long_nickname*</a>
                        <a href="#" className="ul_text">
                            <img src={call} alt="" />
                            +7 (965) 237-44-49</a>
                    </ul>
                </div>
                </div>

                <div className="navigation_2">
                <div className="navigation">
                    <h3 className="navigation_h3">ОПЛАТА</h3>
                    <div className="purchase">
                        <img src={visa} alt="" />
                        <img src={master} alt="" />
                    </div>
                    <div className="purchase">
                        <img src={mcard} alt="" />
                        <img src={mir} alt="" />
                    </div>
                </div>

                <div className="navigation">
                    <h3 className="navigation_h3">РАЗРАБОТКА САЙТА</h3>
                    <img className='navigation_bumerang_logo' src={bumer} alt="" />
                    <a href="#" className="ul_text">Политика конфиденциальности</a>
                </div>
                </div>

            </div>
        </footer>
    )
}