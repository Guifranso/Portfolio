import { useEffect, useState } from 'react'

import styles from './ScrollToTop.module.scss'

export default function ScrollToTop () {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setIsVisible(scrollTop > 0)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.button} ${isVisible ? styles.visible : styles.hidden
        }`}
    >
      <i className={`default-hover-item fa-solid fa-circle-up ${styles.icon}`}></i>
    </button>
  )
}
