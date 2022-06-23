import React from 'react'
import styles from './Practice.module.scss'

const Practice = () => {
    return (
        <div className={styles.body}>

            <h1 className={styles.h1}>
                Sarosh
            </h1>
            <div className={styles.list}>
                <ul className={styles.ul}>
                    <li className={styles.li}>Coffee</li>
                    <li className={styles.li}>Tea</li>
                    <li className={styles.li}>Coca Cola</li>
                </ul>
            </div>
        </div>
    )
}

export default Practice