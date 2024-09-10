import { client } from "@/lib/contentful/client";
import React from "react";
import FeatureCard, { IPost } from "./components/FeatureCard";
import { isEmpty } from "lodash-es";

async function fetchPosts() {
  const data = await client.getEntries({ content_type: "post" });
  return data?.items;
}

export default async function Features() {
  const posts = await fetchPosts();

  return (
    <section>
      {!isEmpty(posts) ? (
        <div className="px-20 flex flex-col gap-5 my-10">
          {posts?.map((post: IPost) => (
            <FeatureCard key={post?.fields?.slug} post={post} />
          ))}
        </div>
      ) : (
        <p>Nothing to show here</p>
      )}
    </section>
  );
}
