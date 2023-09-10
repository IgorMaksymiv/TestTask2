import React, { useState } from 'react'
import styles from './paggination.module.css'


interface Prop {
    totalItems: number,
    itemsPerPage: number,
    onPageChange: (e: any) => void,
}

function Paggination({ totalItems, itemsPerPage, onPageChange }: Prop) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage: any) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            onPageChange(newPage);
        }
    };

    const renderPaginationButtons = () => {
        return Array.from({ length: totalPages }, (_, i) => {
            const pageNumber = i + 1;
            return (
                <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={pageNumber === currentPage ? styles.activeButtonStyles : styles.buttonStyles}
                >
                    {pageNumber}
                </button>
            );
        });
    };

    return (
        <div className={styles.paggination_container}>
            {renderPaginationButtons()}
        </div>
    )
}

export default Paggination;
