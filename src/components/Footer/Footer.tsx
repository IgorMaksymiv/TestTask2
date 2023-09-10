import React from 'react'
import styles from './footer.module.css'
import Button from '../uikit/Button/Button';
import Telegram from '../uikit/Icons/24/Telegram';
import Twitter from '../uikit/Icons/24/Twitter';
import PhoneIcon from '../uikit/Icons/24/PhoneIcon';
import Plus from '../uikit/Icons/24/Plus';
import WhatsaApp from '../uikit/Icons/24/WhatsAap';


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_logo}></div>
                <div className={styles.footer_info}>
                    <div className={styles.first_column}>
                        <p className={styles.footer_title}>InVenture Investment Group</p>
                        <p>Про проект</p>
                        <p>Реклама</p>
                        <p>Сервіси для інвестора</p>
                        <p>Заходи</p>
                        <p>Команда</p>
                        <p>Вакансії</p>
                        <p>Дошка оголошень</p>
                        <p>Часті запитання</p>
                        <p>Умови використання</p>
                        <p>Політика конфіденційності</p>
                    </div>
                    <div className={styles.second_column}>
                        <p className={styles.footer_title}>Інвестиційні пропозиції</p>
                        <p>Інвестиційні проекти та стартапи</p>
                        <p>Продаж бізнесу</p>
                        <p>Нерухомість</p>
                        <p>Земля</p>
                        <p>Франчайзинг</p>
                        <p>Пропозиції інвесторів</p>
                        <p>Сервіси для інвестора</p>
                        <p>Залучення інвестицій / продаж бізнесу</p>
                    </div>
                    <div className={styles.third_column}>
                        <p className={styles.footer_title}>Новини</p>
                        <p>Прямі інвестиції та M&A</p>
                        <p>Стартапи</p>
                        <p>Макроінвестиції</p>
                        <p>Кредитування</p>
                        <p>Фондовий ринок</p>
                        <p>Нерухомість</p>
                    </div>
                    <div className={styles.fourth_column}>
                        <p className={styles.footer_title}>Аналітика</p>
                        <p>Інвестиційний дайджест</p>
                        <p>Дослідження</p>
                        <p>Статті</p>
                        <p>Інтерв’ю</p>
                        <p>Інвестуємо в Україну</p>
                        <p>Рейтинг</p>
                        <p>Бібліотека</p>
                        <p>Інвестори</p>
                    </div>
                </div>
                <Button icon={<Plus />} mode='usual'>Розмістити оголошення</Button>
                <div className={styles.footer_icon}>
                    <label style={{ cursor: 'pointer' }}><WhatsaApp/></label>
                    <label style={{ cursor: 'pointer' }}><Telegram /></label>
                    <label style={{ cursor: 'pointer' }}><Twitter /></label>
                    <label style={{ cursor: 'pointer' }}><PhoneIcon /></label>
                </div>
            </div>
        </div>
    )
}

export default Footer;
