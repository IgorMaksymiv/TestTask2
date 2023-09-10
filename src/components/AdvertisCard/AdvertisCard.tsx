import React from "react";
import styles from './advertisCard.module.css'


interface Prop {
    icon?: React.ReactNode;
    title?: string,
    subtitle?: string,
    background: 'red' | 'blue',
}

function AdvertisCard({
    icon,
    title,
    subtitle,
    background }: Prop) {
    return (
        <div className={styles[background]}>
            <div className={styles.card_container}>
                <span className={styles.icon}>{icon}</span> 
                <p className={styles.card_title}>{title}</p>
                <p className={styles.card_subTitle}>{subtitle}</p>
            </div>
        </div>
    )
}

export default AdvertisCard;
