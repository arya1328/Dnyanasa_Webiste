import { useRef } from 'react';

const useScrollUtils = () => {
  const scrollRef = useRef(null);

  const handleNext = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth;
    const isAtEnd = container.scrollLeft + scrollAmount >= container.scrollWidth;

    container.scrollTo({
      left: isAtEnd ? 0 : container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return { scrollRef, handleNext };
};

export default useScrollUtils;
