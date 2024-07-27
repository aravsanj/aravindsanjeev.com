import { useEffect, useState } from "react";

type useIntersectionObserverArgs = {
  targets: string[];
  onIntersect?: IntersectionObserverCallback;
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
};

export default function useIntersectionObserver(
  args: useIntersectionObserverArgs
) {
  const {
    targets,
    onIntersect,
    threshold = 0.7,
    root = null,
    rootMargin = "0px",
  } = args;

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // TODO: Something fancy here
            // onIntersect(entry);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    targets.forEach((target) => {
      const current = document.getElementById(target);

      if (current) {
        observer.observe(current);
      }
    });

    return () => observer.disconnect();
  }, [targets]);

  return { activeSection };
}
