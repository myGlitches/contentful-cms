import { client } from "@/lib/contentful/client";
import React from "react";
import FeatureCard from "./components/FeatureCard";

async function fetchPosts() {
  const data = await client.getEntries({ content_type: "post" });
  return data?.items;
}

export default async function Features() {
  const posts = await fetchPosts();

  return (
    <section>
      <div className="px-20 flex flex-col gap-5 my-10">
        {posts?.map((post: any, i: number) => (
          <FeatureCard key={post?.fields?.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
