import React from "react";
import { SignIn } from "./sign-in";

export default function LoginForm({ back }: { back?: React.ReactNode }) {
  return (
    <div className="p-10  space-y-2 text-center w-full">
      <h1 className="text-4xl font-bold">Login</h1>
      <SignIn />
      {back}
    </div>
  );
}
