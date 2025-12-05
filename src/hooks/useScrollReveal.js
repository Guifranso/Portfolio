import { useEffect, useRef, useState } from 'react'

/**
 * Hook personalizado para animação de "Fade In Up" ao fazer scroll
 * Usa a Intersection Observer API para detectar quando o elemento entra na viewport
 * @param {Object} options - Opções de configuração
 * @param {number} options.threshold - Porcentagem visível para disparar (0-1)
 * @param {string} options.rootMargin - Margem do root (ex: "-50px")
 * @param {boolean} options.triggerOnce - Se true, anima apenas uma vez
 * @returns {Array} [ref, isVisible] - Ref para anexar ao elemento e estado de visibilidade
 */
export function useScrollReveal(options = {}) {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = true
    } = options

    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (triggerOnce) {
                        observer.unobserve(element)
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false)
                }
            },
            {
                threshold,
                rootMargin
            }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [threshold, rootMargin, triggerOnce])

    return [ref, isVisible]
}

export default useScrollReveal
