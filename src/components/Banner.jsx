import React from 'react'
import BannerImg from "/images/banner.png"
import BannerPlus from "../assets/icons/BannerPlusIxon"
import BannerMinus from "../assets/icons/BannerMinusIcon"
import BannerHeart from "../assets/icons/BannerHeartIcon"
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-row">
                    <Link to="/" className="banner-top">Главная </Link>
                    <Link className="banner-top" to="/">/  Apple</Link>
                    <Link className="banner-top" to="/">/  iPhone XS Max</Link>
                    <Link className="banner-top" to="/">/  Шлейфы</Link>
                    <span className="banner-top" >/  iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал</span>
                    <div className="banner-bottom">
                        <div className="banner__bottom-left">
                            <img src={BannerImg} alt="image" />
                            <div className="left-box">
                                <img src={BannerImg} alt="image" />
                                <img src={BannerImg} alt="image" />
                                <img src={BannerImg} alt="image" />
                            </div>
                        </div>
                        <div className="banner__bottom-right">
                            <div className="right-top">
                                <div className="top-toptitle">iPhone 7 Plus Шлейф кнопки включения + Шлейф <br /> громкости Оригинал</div>
                                <div className="top-desc">Артикул: 854236896ABC  ·  <span className="desc-1">В наличии: 2536 шт.</span>  ·  <span className="desc-2">Нет в наличии</span></div>
                            </div>
                            <div className="right-center">
                                <div className="top-title">
                                    <span className="title-1">Тип</span><span className="title__2">: Оригинал</span> <br />
                                    <span className="title-1">Совместимость</span><span className="title__2">:  iPhone 7 </span><br /><br />
                                    <span className="title-1">Розница</span>: 950 ₽ <br />
                                    <span className="title-1">Оптом (от 5 штук)</span><span className="title__2">:  750 ₽ </span><br /><br />
                                </div><br />
                                <div className="top-subtitle">
                                    <div className="box-1">
                                        <button><BannerMinus /></button> 96 <button><BannerPlus /></button>
                                    </div>
                                    <button className="box-2">Добавить в корзину</button>
                                    <button className="box-3"><BannerHeart />Добавить в избранное</button>
                                </div>
                                <div className="box-4">Вы можете сделать заказ с помощью  <Link className="box-title">WhatsApp</Link> или  <Link className="box-title-2">Telegram</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
