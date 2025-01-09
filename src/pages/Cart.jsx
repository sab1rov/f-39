import React from "react";
import KorzinaImg from "/images/korzina-img.png";
import MinusIcon from "../assets/icons/MinusIcon";
import DenialIcon from "../assets/icons/DenialIcon";
import PlusIcon from "../assets/icons/PlusIcon";

function Cart() {
    return (
        <section className='korzina'>
            <div className='container'>
                <div className='korzina-row'>
                    <div className='korzina-top'>
                        <div className='korzina-top__left'>Ваша корзина</div>
                        <button className='korzina-top__right'>
                            Очистить корзину
                        </button>
                    </div>
                    <div className='korzina-main'>
                        <div className='korzina-main__top'>
                            <div className='top-left'>Название товара</div>
                            <div className='main-1__left'>
                                <img
                                    src={KorzinaImg}
                                    alt=''
                                    className='main-img'
                                />
                                <div className='main-side'>
                                    <div className='side-left'>
                                        iPhone 7 Plus Шлейф кнопки включения +
                                        Шлейф громкости Оригинал
                                    </div>
                                    <div className='side-right'>
                                        Артикул: 854236896ABC
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='korzina-main__main'>
                            <div className='main-1'>
                                <div className='main-1__right'>
                                    <div className='right'>
                                        <div className='top-right'>
                                            Цена (Розница)
                                        </div>
                                        <div className='right_bottom'>
                                            950 ₽
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <div className='top-right'>
                                            Цена (Опт от 5)
                                        </div>
                                        <div className='right_bottom'>
                                            750 ₽
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <div className='top-right'>Остаток</div>
                                        <div className='right_bottom'>
                                            {" "}
                                            500 шт.
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <div className='top-right'>
                                            Количество
                                        </div>
                                        <div className='right_bottom-1'>
                                            <button>
                                                <MinusIcon />
                                            </button>
                                            13{" "}
                                            <button>
                                                <PlusIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <div className='top-right'>
                                            Цена (Розница)
                                        </div>
                                        <div className='right_bottom'>
                                            950 ₽
                                        </div>
                                    </div>
                                    <div className='right__6'>
                                        <button>
                                            <DenialIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='korzina-bottom'>
                        <div className='bottom-top'>
                            <div className='bottom-top__left'>
                                Введите промокод на скидку:
                            </div>
                            <div className='bottom-top__right'>
                                Общая скидка: 0% Итого: 29 250 ₽
                            </div>
                        </div>
                        <div className='bottom-bottom'>
                            <div className='main-bottom'>
                                <div className='bottom-1'>
                                    <div className='bottom-label'>
                                        <input
                                            type='text'
                                            placeholder='BUY2020GOGO'
                                        />
                                    </div>
                                    <button className='btn'>Применить</button>
                                </div>
                                <div className='bottom_2'>
                                    Скидка по промокоду составит: 0%
                                </div>
                            </div>
                            <button className='bottom-2'>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
