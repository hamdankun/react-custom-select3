import { useEffect, useRef, useState } from 'react';

const useResizeObserver = (callback: (height: number) => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === ref.current) {
          callback(entry.contentRect.height);
        }
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref };
};

export default useResizeObserver;
