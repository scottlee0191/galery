import { prisma } from "@/lib";
import Image from "next/image";
import { Suspense } from "react";
import Page from "./_components/Page";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const perPage = +(process.env.PER_PAGE ?? 6);
  const page = Math.max(+(searchParams.page ?? 1), 1);
  const images = await prisma.image.findMany({
    take: perPage,
    skip: page - 1,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container p-5">
      <h1 className="text-4xl font-semibold mb-4">Your gallery!</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {images.map((image) => (
          <Link
            href={`/dashboard/image/${image.id}`}
            key={image.id}
            className="shadow-xl h-72 relative"
          >
            <Image
              src={image.url}
              className="object-cover"
              fill
              alt={image.name}
            />
          </Link>
        ))}
      </div>
      <Suspense>
        <Page page={page} />
      </Suspense>
    </div>
  );
}
