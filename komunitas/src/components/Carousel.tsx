import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Carousel({ items, onClickItem }: any) {
  const [start, setStart] = useState(0);
  const visibleCount = 4;

  const handleNext = () => setStart((prev) => Math.min(prev + 1, items.length - visibleCount));
  const handlePrev = () => setStart((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative flex items-center">
      <button onClick={handlePrev} className="p-2">
        <FaChevronLeft />
      </button>
      <div className="flex space-x-4 overflow-hidden">
        {items.slice(start, start + visibleCount).map((item: any, i: number) => (
          <div key={i} className="group" onClick={() => onClickItem(item)}>
            <img src={item.img} alt="" className="w-48 h-32 object-cover rounded-md hover:scale-105 transition" />
            <p className="text-center mt-1">{item.title}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="p-2">
        <FaChevronRight />
      </button>
    </div>
  );
}
