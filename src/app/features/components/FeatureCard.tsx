import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface IPost {
  fields: {
    title: string;
    slug: string;
  };
}

function FeatureCard({ post }: { post: IPost }) {
  const { slug, title } = post?.fields;

  console.log("Post data:", post);
  return (
    <div>
      <Link href={`/features/${slug}`}>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-medium">{title}</CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <p>
              Collaborate on a Notion-like interface to define your LLM app
              requirements. Attach docs, data, and examples to ensure your
              prompts achieve high precision results.
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default FeatureCard;
