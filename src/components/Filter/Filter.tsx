import React, { useState } from 'react'
import styles from './filter.module.css'
import FilterIcon from '../uikit/Icons/24/FilterIcon';
import Dropdown from '../uikit/Dropdown/Dropdown';
import Input from '../uikit/Input/input';
import Button from '../uikit/Button/Button';


function Filter() {

    return (
        <div className={styles.filter_container}>
            <div className={styles.filter_header}>
                <div className={styles.wrapper}>
                    <div className={styles.filter_icon}>
                        <FilterIcon />
                    </div>
                    <div className={styles.filter_title}>Фільтри</div>
                </div>
            </div>
            <div className={styles.filter_content}>
                <Dropdown
                    label='Тип'
                    options={['Продаж', 'Інвестиції', 'Стартапи']}
                />
                <Dropdown
                    label='Галузь'
                    options={['item1', 'item2', 'dasdasd']}
                />
                <Input label='Регіон' />
                <Dropdown
                    label='Ціна від'
                    placeholder='$ 0'
                    options={['$ 0', '$ 50', '$ 100']}
                />
                <Dropdown
                    label='Ціна до'
                    placeholder='$ 5 000 000+'
                    options={['$ 1 000 000', '$ 3 000 000', '$ 5 000 000']}
                />
                <Button mode='primary'>Пошук</Button>
            </div>
        </div>
    )
}

export default Filter;
