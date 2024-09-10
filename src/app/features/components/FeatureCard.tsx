import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import RichText from "../[id]/components/RichText";
import { Document } from "@contentful/rich-text-types";

interface CoverImage {
  fields: {
    file: {
      url: string;
      details: {
        image: {
          width: string;
          height: string;
        };
      };
    };
  };
}

export interface IPost {
  fields: {
    title: string;
    slug: string;
    description: Document;
    coverImage: CoverImage;
  };
}

function FeatureCard({ post }: { post: IPost }) {
  const { slug, title, coverImage, description } = post?.fields;

  const imageSrc = coverImage?.fields?.file?.url
    ? `https:${coverImage.fields.file.url}`
    : undefined;

  const width = Number(coverImage?.fields?.file?.details?.image?.width) || 0;
  const height = Number(coverImage?.fields?.file?.details?.image?.height) || 0;

  const content = description;

  return (
    <div>
      <Link href={`/features/${slug}`}>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-medium">{title}</CardTitle>
          </CardHeader>
          {imageSrc && width > 0 && height > 0 && (
            <div className="p-5 flex justify-center items-center">
              <Image alt={slug} src={imageSrc} width={width} height={height} />
            </div>
          )}
          <CardContent>
            <RichText content={content} />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default FeatureCard;
