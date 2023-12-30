"use client";
import { StructuredText } from "react-datocms";

type BodyTextProps = {
  data: any;
};

export default function BodyText({ data }: BodyTextProps) {
  return (
    <div className="prose prose-invert">
      <StructuredText data={data} />
    </div>
  );
}
