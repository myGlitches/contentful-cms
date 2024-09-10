import React, { useState } from "react";
import "../../../styles/globals.css";

const EmbedVideo = ({
  link,
  title,
  className,
}: {
  link: string;
  title?: string;
  className: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span>Loading...</span>
        </div>
      )}
      <iframe
        src={link}
        title={title}
        className={className}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </>
  );
};

export default EmbedVideo;
