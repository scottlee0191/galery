import { Github, GithubIcon } from "lucide-react";
import { Button } from "./ui/button";
import { login } from "@/actions/auth";

export function SignIn() {
  return (
    <form action={login}>
      <Button type="submit" className="gap-2">
        Sign in with Github <GithubIcon className="size-4" />
      </Button>
    </form>
  );
}
