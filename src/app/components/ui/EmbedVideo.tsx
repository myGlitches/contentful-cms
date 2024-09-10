import React from "react";
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
  return (
    <iframe
      src={link}
      title={title}
      className={className}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default EmbedVideo;
