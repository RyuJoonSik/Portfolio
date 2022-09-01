import { useCallback, useEffect, useState } from "react";

export default function useIntersectionObserver(handler: () => void) {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const handleScroll = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entryElement] = entries;
      if (entryElement.isIntersecting) {
        handler();
      }
    },
    [handler]
  );

  useEffect(() => {
    const currentObserver = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    // const { current: currentObserver } = observer;

    if (target) {
      currentObserver.observe(target);
    }

    return () => {
      if (target) {
        currentObserver.unobserve(target);
      }
    };
  }, [target, handleScroll]);

  return [setTarget];
}
