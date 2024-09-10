import React from "react";
import { IPost } from "../../components/FeatureCard";
import Image from "next/image";

function PostHeader({ post }: { post: IPost }) {
  const { title, coverImage, slug } = post?.fields;

  const imageSrc = coverImage?.fields?.file?.url
    ? `https:${coverImage.fields.file.url}`
    : undefined;

  const width = Number(coverImage?.fields?.file?.details?.image?.width) || 0;
  const height = Number(coverImage?.fields?.file?.details?.image?.height) || 0;

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl">{title}</h1>

        {imageSrc && width > 0 && height > 0 && (
          <div className="p-5 flex justify-center items-center">
            <Image alt={slug} src={imageSrc} width={width} height={height} />
          </div>
        )}
      </div>
    </>
  );
}

export default PostHeader;
