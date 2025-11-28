import React from 'react'
import ToggleTheme from '../ToggleTheme'
import Link from 'next/link'

import styles from './Header.module.scss'

export default function Header({ children, ...props }) {
    return (
        <div className={styles.header} {...props}>
            <span className={styles.logo}>  </span>
            <div className={styles.nav}>
                <Link href="/sobre" passHref className={`default-hover-item ${styles.navItem}`}> Sobre </Link>
                <Link href="/projetos" passHref className={`default-hover-item ${styles.navItem}`}> Projetos </Link>
                <Link href="/experiencias" passHref className={`default-hover-item ${styles.navItem}`}> Experiências </Link>
                <ToggleTheme />
            </div>
        </div>
    )
}
