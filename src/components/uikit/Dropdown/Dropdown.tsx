import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './dropdown.module.css';
import ArrowDown from '../Icons/12/ArrowDown';
import ArrowUp from '../Icons/12/ArrowUp';


interface Prop {
    label: string;
    placeholder?: string;
    options: string[];
}

function Dropdown({
    label,
    placeholder,
    options,
}: Prop) {
    const [isOpen, setOpen] = useState(false);
    const [selected, setSelected] = useState('')

    const handleOptionClick = (item: string) => {
        setSelected(item);
        setOpen(false);
    }

    const buttonContent = selected || placeholder;

    return (
        <div className={styles.dropdown}>
            <div style={{ marginBottom: '15px' }}>{label}</div>
            <div
                className={`${styles.dropdown_btn} 
                ${placeholder ? styles.dropdown_placeholder : ''} 
                ${selected ? styles.dropdown_placeholder : ''}`}
                onClick={() => setOpen(prev => !prev)}
            >
                {buttonContent}{isOpen ? <ArrowUp /> : <ArrowDown />}
            </div>
            {isOpen && (
                <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames={{
                        enter: styles.dropdown_list,
                        enterActive: styles.dropdown_list_open,
                    }}
                    unmountOnExit
                >
                    <div className={`${styles.dropdown_list} ${isOpen ? styles.dropdown_list_open : ''}`}>
                        {options.map(item => (
                            <div
                                key={item}
                                className={styles.dropdown_item}
                                onClick={() => handleOptionClick(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </CSSTransition>
            )}
        </div>
    );
}

export default Dropdown;
