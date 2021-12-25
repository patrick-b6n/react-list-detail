import { useEffect, useState } from "react";

export function useRestoreScrollPosition(condition: () => Boolean) {
    const [scrollY, setScrollY] = useState<number>()

    useEffect(() => {
        // needs to run after the render circle
        if (condition() && scrollY !== undefined) {
            window.scrollTo({ top: scrollY })
            setScrollY(undefined)
        }
    }, [condition, scrollY])

    if (!condition() && scrollY === undefined) {
        setScrollY(window.scrollY)
    }
}