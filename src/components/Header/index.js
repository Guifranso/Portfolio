import React from 'react'
import ToggleTheme from '../ToggleTheme'
import Link from 'next/link'

export default function Header ({ children, ...props }) {
    return (
        <div className="flex h-20 flex-row bg-secondary-light dark:bg-back-primary-dark items-center justify-around px-14 py-12" {...props}>
            <span className="text-primary-light text-4xl px-10">  </span>
            <div className="flex flex-row items-center">
                <Link href="/sobre" passHref className="default-hover-item text-base px-4"> Sobre </Link>
                <Link href="/projetos" passHref className="default-hover-item text-base px-4"> Projetos </Link>
                <Link href="/experiencias" passHref className="default-hover-item text-base px-4"> Experiências </Link>
                <ToggleTheme/>
            </div>
        </div>
    )
}
