"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return <Button onClick={() => router.back()}>Go Back</Button>;
}
