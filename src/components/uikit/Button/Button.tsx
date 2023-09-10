import React from 'react'
import styles from './button.module.css'


interface Prop {
    children?: JSX.Element | string,
    mode: 'primary' | 'secondary' | 'usual',
    icon?: React.ReactNode;
    onClick?: () => void,
}

function Button({
    children,
    mode,
    onClick,
    icon }: Prop) {
    return (
        <button
            className={styles[mode]}
            onClick={onClick}
            type='button'
        >
            <div className={styles.btn_content}>
                {icon && <span className={styles.icon}>{icon}</span>}
                {children}
            </div>
        </button>
    )
}

export default Button;
