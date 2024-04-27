"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/login-form";

export default function Page() {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <LoginForm
          back={
            <Button variant="outline" onClick={() => router.back()}>
              Back
            </Button>
          }
        />
      </DialogContent>
    </Dialog>
  );
}
