import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

interface RichTextProps {
  content: Document;
}

const options = {};

const RichText = ({ content }: RichTextProps) => {
  if (!content) {
    return <div>No content available</div>;
  }

  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
