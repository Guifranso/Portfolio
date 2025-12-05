import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import ToggleTheme from '../ToggleTheme'

import styles from './Header.module.scss'

export default function Header({ children, ...props }) {
    const router = useRouter()
    const t = useTranslations('nav')

    const navItems = [
        { href: '/sobre', label: t('about') },
        { href: '/projetos', label: t('projects') },
        { href: '/experiencias', label: t('experiences') }
    ]

    return (
        <div className={styles.headerWrapper}>
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
                </div>

            </div>
            <div className={styles.themeWrapper}>
                <div className={styles.themeToggler}>
                    <ToggleTheme />
                </div>
            </div>
        </div>
    )
}
