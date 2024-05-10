import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window?.innerWidth,
        height: window?.innerHeight,
        isMobile: false
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: false
            })
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (windowSize.width < 768) {
            setWindowSize(prev => ({ ...prev, isMobile: true }))
            return
        }

        setWindowSize(prev => ({ ...prev, isMobile: false }))
    }, [windowSize.width])

    return windowSize;
}

export default useWindowSize;