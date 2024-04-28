import { prisma } from "@/lib";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const images = await prisma.image.findMany();

  return (
    <div className="container p-5">
      <h1 className="text-4xl font-semibold mb-4">Your gallery!</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="shadow-xl h-72 relative">
            <Image
              src={image.url}
              className="object-cover"
              fill
              alt={image.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
