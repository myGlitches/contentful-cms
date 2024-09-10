import React from "react";
import Image from "next/image";

function CompanyGallery() {
  const images = [
    { src: "/images/Samunnati.png", alt: "Samunnati" },
    { src: "/images/Akhya.png", alt: "Akhya" },
    { src: "/images/Eight.png", alt: "Eight" },
  ];

  return (
    <div className="relative w-full overflow-x-hidden whitespace-nowrap my-10 no-scrollbar">
      <div className="absolute left-0 top-0 bottom-0 w-60 bg-gradient-to-r from-white"></div>
      <div className="absolute right-0 top-0 bottom-0 w-60 bg-gradient-to-l from-white"></div>

      <div className="flex justify-evenly gap-20">
        {Array(3)
          .fill(null)
          .map((_, repeatIndex) =>
            images.map((image, index) => (
              <Image
                key={`${image.alt}-${repeatIndex}-${index}`}
                alt={image.alt}
                src={image.src}
                width={200}
                height={200}
                className="inline-block fade-in-5"
              />
            ))
          )}
      </div>
    </div>
  );
}

export default CompanyGallery;
