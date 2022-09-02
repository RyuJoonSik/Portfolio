import { useEffect, useState } from "react";

export default function useIntersectionObserver(handler: () => void) {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [isScrollHandlerOn, setIsScrollHandlerOn] = useState(false);

  useEffect(() => {
    if (!isScrollHandlerOn) {
      return;
    }

    const currentObserver = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const [entryElement] = entries;
        if (entryElement.isIntersecting) {
          handler();
          observer.unobserve(entryElement.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (target) {
      currentObserver.observe(target);
    }
  }, [target, isScrollHandlerOn]);

  return { setTarget, isScrollHandlerOn, setIsScrollHandlerOn };
}
