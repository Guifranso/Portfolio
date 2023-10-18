import React from 'react'
import ScrollToTop from '../ScrollToTop'

export default function Footer () {
    return (
        <>
        <div className="flex items-center dark:bg-back-primary-dark justify-around w-full h-20 py-16 px-14">
            <div className="pl-12">
                <i className="px-6 default-hover-item text-3xl fa-brands fa-github"></i>
                <i className="px-6 default-hover-item text-3xl fa-brands fa-whatsapp"></i>
                <i className="px-6 default-hover-item text-3xl fa-brands fa-linkedin"></i>
            </div>
        </div>
        <ScrollToTop/>
        </>
    )
}
