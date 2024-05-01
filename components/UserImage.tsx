import { Image as ImageEntity } from "@prisma/client";
import Image from "next/image";
import React from "react";

export default function UserImage({ image }: { image: ImageEntity }) {
  return (
    <div className="relative container py-5 space-y-3">
      <h1 className="text-3xl font-semibold">{image.name}</h1>
      <Image
        src={image.url}
        className="object-cover"
        width={400}
        height={400}
        alt={image.name}
      />
      <p className="italic">{image.createdAt.toDateString()}</p>
    </div>
  );
}
