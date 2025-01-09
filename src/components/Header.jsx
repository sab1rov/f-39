import React, { useRef, useState } from 'react'
import HeaderImg from "/images/magazin-logo.png"
import HeaderIcon2 from "../assets/icons//HeaderSearchIcon"
import HeaderLove from '../assets/icons/HeaderLoveIcon'
import HeaderShop from '../assets/icons/HeaderShopIcon'
import HeaderMenu from '../assets/icons/HeaderMenuIcon'
import HeaderCall from "../assets/icons/HeaderCallIcon"
import HeaderClose from "../assets/icons/HeaderCloseIcon"
import { Link } from 'react-router-dom'
import HeaderRightIcon from "../assets/icons/HeaderRightIcon"

function Header() {
    let MenuRef = useRef(null)
    const [open, setOpen] = useState(false)

    function HandelClick() {
         setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrap">
                    <div className="header__top">
                        <div className="header__top-left">
                            <Link className='left' to="/ About company">О компании</Link>
                            <Link className='left' to="/ delivery">Доставка и оплата</Link>
                            <Link className='left' to="/ guarantees">Гарантии</Link>
                            <Link className='left' to="/ contact">Контакты</Link>
                        </div>
                        <div className="header__top-right">
                            <h4 className="right-title"> <HeaderCall />+7 (965) 237-44-49</h4>
                            <select className='right-desc'>
                                <option value="/">Русский</option>
                                <option value="/">Узбекский</option>
                                <option value="/">Английский</option>
                            </select>
                            <Link className="right-desc">Личный кабинет</Link>
                        </div>
                    </div>


                    <div className="header-center">
                        <div className="header-center-left">
                            <button onClick={HandelClick} className={`header-menu__open ${open ? "active" : ""}`}>
                                {open ?
                                    <HeaderClose />
                                    :
                                    <HeaderMenu />
                                }
                            </button>
                            <div className={`header-menu ${open ? "active" : ""}`}>
                                <div className="header-icons">
                                    <select className='right-desc'>
                                        <option value="/">Русский</option>
                                        <option value="/">Узбекский</option>
                                        <option value="/">Английский</option>
                                    </select>
                                </div>
                                <nav className="links">
                                    <Link to="/">О компании</Link>
                                    <Link to="/">Доставка и оплата</Link>
                                    <Link to="/">Гарантии</Link>
                                    <Link to="/">Контакты</Link>
                                    <Link to="/">Личный кабинет</Link>
                                    <Link className="header-call">+7 (965) 237-44-49</Link>
                                </nav>
                            </div>
                        </div>
                        <Link to="/" className="header-logo">
                            <img src={HeaderImg} alt="image" />
                        </Link>
                        <label className='label'>
                            <input type="text" placeholder="Введите поисковой запрос" />
                            <div className="place">
                                <div className="header-btn"><HeaderIcon2 /></div>
                                <button className="btn">Найти</button>
                            </div>
                        </label>
                        <div className="icons">
                            <button className="header-icon"><HeaderLove /></button>
                            <button className="header-icon"><HeaderShop /></button>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <nav className="bottom-left">
                            <Link className='bottom__title'>Apple  <HeaderRightIcon /></Link>
                            <Link className='bottom__title'>Hauwei <HeaderRightIcon /></Link>
                            <Link className='bottom__title'>Xiaomi <HeaderRightIcon /></Link>
                            <Link className='bottom__title'>Samsung <HeaderRightIcon /></Link>
                            <Link className='bottom__title'>Питание и кабели</Link>
                            <Link className='bottom__title'>Powerbank</Link>
                            <Link className='bottom__title'>Акции</Link>
                            <div className="bottom__title">Прайс-лист</div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
