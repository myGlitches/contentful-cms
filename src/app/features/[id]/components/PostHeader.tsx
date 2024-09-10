import React from "react";
import { IPost } from "../../components/FeatureCard";

function PostHeader({ post }: { post: IPost }) {
  const { title } = post?.fields;
  return (
    <>
      <div className="flex justify-center items-center ">
        <h1 className="text-4xl">{title}</h1>
      </div>
    </>
  );
}

export default PostHeader;
