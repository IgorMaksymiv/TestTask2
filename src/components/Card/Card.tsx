import React from "react";
import styles from './card.module.css'

import Dollar from "../uikit/Icons/24/Dollar";
import Star from "../uikit/Icons/24/Star";
import Views from "../uikit/Icons/24/Views";
import Button from "../uikit/Button/Button";


interface Props {
    item: any,
    index: number,
}

function Card({
    item,
    index,
}: Props) {

    return (
        <div
            key={item.id}
                className={`${styles.card_item} 
            ${index === 9 ? styles.width_penultimate_card : ''} 
            ${index === 10 ? styles.width_last_card : ''}`}
        >
            <img
                className={styles.card_img}
                src={item.photo}
                alt="photo"
            />
            <div className={styles.card_content_container}>
                <div className={styles.item_date}>{item.date}</div>
                <div className={styles.item_title}>{item.title}</div>
                <div className={styles.card_info_content}>
                    <div className={styles.item_price}>
                        <label style={{ marginRight: '3px' }}><Dollar /></label>
                        {item.price}
                    </div>
                    {index === 9 || index === 10 ? <Button mode="secondary">Читати далі</Button> :
                        <div className={styles.card_info}>
                            <div className={styles.item_selected}>
                                {index === 9 || index === 10 ? null : <label style={{ marginRight: '3px' }}><Star /></label>}
                                {item.selected}</div>
                            <div className={styles.item_views}>
                                {index === 9 || index === 10 ? null : <label style={{ marginRight: '3px' }}><Views /></label>}
                                {item.views}</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;
