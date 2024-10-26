import React, { useEffect, useState } from 'react'
import { TiArrowSortedUp } from "react-icons/ti"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const listenToScroll = () => {
        let heightToHideFrom = 100;
        const winScroll = document.body.scroll ||
            document.documentElement.scroll;

        if (winScroll > heightToHideFrom) {
            isVisible &&      // to limit setting state only the first time
                setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])
    return (
        isVisible ? (
            <div 
            className='fixed bottom-20  right-10'>
                <div
                    onClick={scrollToTop}
                    className='text-[#ff3333] shadow-2xl shadow-black  h-16 w-16 bg-[#fff] rounded-full flex items-center justify-center cursor-pointer animate-pulse'>
                    <TiArrowSortedUp />
                </div>
            </div>
        ) : null

    )
}
