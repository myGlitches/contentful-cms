import React from "react";
import { IPost } from "../../components/FeatureCard";
import RichText from "./RichText";

function PostBody({ post }: { post: IPost }) {
  const { description } = post?.fields;
  const content = description;

  return (
    <div className="mx-auto prose">
      <RichText content={content} />
    </div>
  );
}

export default PostBody;
