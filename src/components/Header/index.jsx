import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ToggleTheme from '../ToggleTheme'

import styles from './Header.module.scss'

export default function Header({ children, ...props }) {
    const router = useRouter()

    const navItems = [
        { href: '/sobre', label: 'Sobre' },
        { href: '/projetos', label: 'Projetos' },
        { href: '/experiencias', label: 'Experiências' },
    ]

    return (
        <div className={styles.header} {...props}>
            <span className={styles.logo}>  </span>
            <div className={styles.nav}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        passHref
                        className={`default-hover-item ${styles.navItem} ${router.pathname === item.href ? styles.active : ''}`}
                    >
                        {item.label}
                    </Link>
                ))}
                <ToggleTheme />
            </div>
        </div>
    )
}
