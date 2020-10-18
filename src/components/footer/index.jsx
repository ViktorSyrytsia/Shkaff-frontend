import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import './style.scss';

const Footer = () => {
        return (
                <div className="footer-container">
                        <div className="footer-list">
                                <div className="footer-list__item">
                                        <Link className="footer-list__item-content" to="/others/footer/page/about">Про нас</Link></div>

                                <div className="footer-list__item">
                                        <Link className="footer-list__item-content" to="/others/footer/page/our-products">Наша продукція</Link></div>

                                <div className="footer-list__item">
                                        <div className="footer-list__item-social">
                                                <a className='telegram' href="https://web.telegram.org/#/login"><Icon name='telegram' size='big' /></a>
                                                <a className='viber' href="https://www.viber.com/ru/"><Icon name='viber' size='big' /></a>
                                                <a className='instagram' href="https://www.instagram.com/dmytro.didukh/" ><Icon name='instagram' size='big' /></a>
                                        </div>
                                </div>
                                <div className="footer-list__item">
                                        <Link className="footer-list__item-content" to="/others/footer/page/payment">Оплата</Link></div>

                                <div className="footer-list__item">
                                        <Link className="footer-list__item-content" to="/others/footer/page/delivery">Доставка</Link></div>

                        </div>
                        <div className={'footer-company'}>Copyright © DiVi Corp. All Rights Reserved.</div>

                </div >
        )
}

export default Footer
