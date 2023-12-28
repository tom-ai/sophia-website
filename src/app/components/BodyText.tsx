"use client";
import { StructuredText } from "react-datocms";

type BodyTextProps = {
  data: any;
};

export default function BodyText({ data }: BodyTextProps) {
  return <StructuredText data={data} />;
}
