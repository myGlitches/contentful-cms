import Skeleton from "@/components/ui/skeleton";
import { client } from "@/lib/contentful/client";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { IPost } from "../components/FeatureCard";
import PostBody from "./components/PostBody";
import PostHeader from "./components/PostHeader";

interface FeatureProps {
  params: {
    id: string;
  };
}

async function fetchPost(id: string): Promise<IPost | null> {
  const cfClient = client; // You can add preview logic here if needed
  const response = await cfClient.getEntries({
    content_type: "post",
    "fields.slug": id,
  });

  return response?.items?.[0] || null;
}

export default async function Feature({ params }: FeatureProps) {
  const { id } = params;
  const post = await fetchPost(id);

  if (!post) {
    return <Skeleton />;
  }

  return (
    <section className="section">
      {/* {preview && <PreviewAlert />} */}
      <div className="container">
        <article className="prose mx-auto p-5">
          <Link href="/features">
            <MoveLeft />
          </Link>
          <PostHeader post={post} />
          <PostBody post={post} />
        </article>
      </div>
    </section>
  );
}
