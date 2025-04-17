import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

const MasonryLayout = ({ items }) => {
  const gridRef = useRef(null);
  const isoRef = useRef(null);

  useEffect(() => {
    const iso = new Isotope(gridRef.current, {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: 16,
      },
    });

    isoRef.current = iso;

    // Trigger layout only after images are fully loaded
    imagesLoaded(gridRef.current, () => {
      iso.layout();
    });

    return () => {
      iso.destroy();
    };
  }, []);

  useEffect(() => {
    if (isoRef.current) {
      imagesLoaded(gridRef.current, () => {
        isoRef.current.reloadItems();
        isoRef.current.arrange();
      });
    }
  }, [items]);

  return (
    <div ref={gridRef} className="grid w-full mt-8 px-4 mb-16 justify-center">
      <div className="grid-sizer w-full sm:w-1/3 md:w-1/4 lg:w-1/5"></div>
      {items.map((item, index) => (
        <div key={index} className="grid-item w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
          <div className="bg-white shadow-md overflow-hidden">
            <img
              src={item.imageUsed}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
