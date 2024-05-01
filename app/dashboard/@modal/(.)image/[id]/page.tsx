import UserImage from "@/components/UserImage";
import { prisma } from "@/lib";
import { redirect } from "next/navigation";
import React from "react";
import Modal from "./Modal";

export default async function PageModal({
  params,
}: {
  params: { id: string };
}) {
  const image = await prisma.image.findFirst({ where: { id: params.id } });
  if (!image) redirect("/dashboard");

  return (
    <Modal>
      <UserImage image={image} />
    </Modal>
  );
}
