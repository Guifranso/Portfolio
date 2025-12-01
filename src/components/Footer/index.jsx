import React from 'react'
import ScrollToTop from '../ScrollToTop'

import styles from './Footer.module.scss'

export default function Footer () {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.iconsContainer}>
                    <a href="https://github.com/Guifranso" target="_blank" rel="noreferrer" className={`default-hover-item ${styles.icon}`}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/guilherme-fran%C3%A7a-a82150218/" target="_blank" rel="noreferrer" className={`default-hover-item ${styles.icon}`}>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <ScrollToTop />
        </>
    )
}
