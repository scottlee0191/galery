import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Header() {
  const user = await auth();

  return (
    <header className="border-b shadow-sm py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1 className="text-3xl font-semibold">Gallery</h1>
        </Link>
        <nav>{user ? <SignOut /> : <SignIn />}</nav>
      </div>
    </header>
  );
}
