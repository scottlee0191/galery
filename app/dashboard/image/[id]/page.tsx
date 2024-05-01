import UserImage from "@/components/UserImage";
import { prisma } from "@/lib";
import { redirect } from "next/navigation";

export default async function ImageDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const image = await prisma.image.findFirst({ where: { id: params.id } });
  if (!image) redirect("/dashboard");

  return <UserImage image={image} />;
}
