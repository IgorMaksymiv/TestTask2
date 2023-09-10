import React from "react";
import { Link } from 'react-router-dom';

import styles from './header.module.css'
import Search from "../uikit/Icons/24/Search";
import User from "../uikit/Icons/24/User";
import Global from "../uikit/Icons/24/Global";
import Phone from "../uikit/Icons/24/Phone";


function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logo_img}></div>
                    <div className={styles.logo_icon}></div>
                </div>
                <div className={styles.navigation}>
                    <Link to={'/about'}>
                        <div>Про компанію</div>
                    </Link>
                    <Link to={'/investment'}>
                        <div>Інвестиційні позиції</div>
                    </Link>
                    <Link to={'/news'}>
                        <div>Новини</div>
                    </Link>
                    <Link to={'/analytics'}>
                        <div>Аналітика</div>
                    </Link>
                    <Link to={'/digest'}>
                        <div>Дайджест</div>
                    </Link>
                </div>
                <div className={styles.icons}>
                    <label><Search /></label>
                    <label><User /></label>
                    <label><Global /></label>
                    <label><Phone /></label>
                </div>
            </div>
        </div>
    )
}

export default Header;
