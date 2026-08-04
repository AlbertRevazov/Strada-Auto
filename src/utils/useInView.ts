import { useRef, useEffect, useState } from 'react';

export interface UseInViewOptions {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
    once?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    const { threshold = 0.2, root = null, rootMargin = '0px', once = true } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (once && hasTriggered) {
                    return;
                }
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        setHasTriggered(true);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, root, rootMargin },
        );

        observer.observe(element);
        return () => observer.unobserve(element);
    }, [threshold, root, rootMargin, once, hasTriggered]);

    return { ref, isVisible };
}
