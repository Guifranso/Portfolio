import React from 'react'
import ScrollToTop from '../ScrollToTop'

import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.iconsContainer}>
                    <i className={`default-hover-item fa-brands fa-github ${styles.icon}`}></i>
                    <i className={`default-hover-item fa-brands fa-whatsapp ${styles.icon}`}></i>
                    <i className={`default-hover-item fa-brands fa-linkedin ${styles.icon}`}></i>
                </div>
            </div>
            <ScrollToTop />
        </>
    )
}
