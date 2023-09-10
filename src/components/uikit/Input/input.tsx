import React from 'react'
import styles from './input.module.css'


interface Prop {
    label: string,
}

function Input({ label }: Prop) {
    return (
        <div>
            <div className={styles.label}>{label}</div>
            <input className={styles.input} type="text" />
        </div>
    )
}

export default Input;
