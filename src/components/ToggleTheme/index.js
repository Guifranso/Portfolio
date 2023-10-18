import { useTheme } from 'next-themes'

export default function ToggleTheme ({ children, ...props }) {
    const { theme, setTheme } = useTheme()

    const toggle = () => {
        // eslint-disable-next-line eqeqeq
        theme == 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <div className="hidden sm:block">
            <i className="default-hover-item fa-regular fa-moon text-2xl block dark:hidden px-10" onClick={toggle}></i>
            <i className="default-hover-item fa-solid fa-moon text-2xl hidden dark:block px-10" onClick={toggle}></i>
        </div>
    )
}
