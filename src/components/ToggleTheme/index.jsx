import { useTheme } from 'next-themes'

import styles from './ToggleTheme.module.scss'

export default function ToggleTheme({ children, ...props }) {
    const { resolvedTheme, setTheme } = useTheme()

    const toggle = () => {
        resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <button
            type="button"
            className={styles.container}
            onClick={toggle}
            aria-label="Alternar tema"
        >
            <i className={`default-hover-item fa-regular fa-moon ${styles.icon} ${styles.lightMode}`}></i>
            <i className={`default-hover-item fa-solid fa-moon ${styles.icon} ${styles.darkMode}`}></i>
        </button>
    )
}
