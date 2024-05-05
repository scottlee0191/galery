"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";

export default function Modal({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        {children}
        <div className="container">
          <Button
            variant="link"
            className="justify-start px-0"
            onClick={() => router.back()}
          >
            Back
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
