"use client";

import { useUploadThing } from "@/lib/uploadthing";
import { Loader2, UploadCloudIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { toast } from "sonner";

export default function Upload() {
  const router = useRouter();
  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      toast.dismiss("begin");
      toast.success("Upload successfully!");
      router.refresh();
    },
    onUploadError: (error: Error) => {
      toast.dismiss("begin");
      toast.error(error.message);
    },
    onUploadBegin: () => {
      toast(
        <div className="flex items-center gap-2">
          <Loader2 className="animate-spin" />
          Uploading...
        </div>,
        { id: "begin", duration: 100000 }
      );
    },
  });
  function onchange(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.currentTarget;
    if (files?.length) {
      startUpload(Object.values(files));
    }
  }

  return (
    <div>
      <label htmlFor="upload" className="cursor-pointer">
        <UploadCloudIcon />
      </label>
      <input
        type="file"
        id="upload"
        accept="image/*"
        onChange={onchange}
        className="sr-only"
      />
    </div>
  );
}
