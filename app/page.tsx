import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-red-500">
              Effortless Gallery Management
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The only gallery app you need. Easily organize, edit, and share
              your photos. Beautifully designed. Intuitive. Powerful.
            </p>
          </div>
          <img
            alt="Screenshot"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Photos. Your Gallery.
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience the joy of beautiful memories with the best gallery
              app. Organize your photos. Share your moments.
            </p>
          </div>
        </div>
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Screenshot"
                className="aspect-[9/18] overflow-hidden rounded-lg object-contain object-center peer"
                height="600"
                src="/placeholder.svg"
                width="300"
              />
              <Button className="mx-auto peer:hidden translate-y-2 translate-y-0 duration-300 ease-in-out">
                Download for iOS
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Screenshot"
                className="aspect-[9/18] peer overflow-hidden rounded-lg object-contain object-center translate-y-2 translate-y-0 duration-300 ease-in-out object-cover"
                height="600"
                src="/placeholder.svg"
                width="300"
              />
              <Button className="mx-auto peer:hidden translate-y-2 translate-y-0 duration-300 ease-in-out">
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">
                Organize your memories beautifully
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The only gallery app you need. Easily organize, edit, and share
                your photos. Beautifully designed. Intuitive. Powerful.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet our Customers
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Trusted by the best teams in the world. We help teams of all
              sizes.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 lg:grid-cols-5 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
            <img
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
            <img
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
            <img
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
            <img
              alt="Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
            <img
              alt="Logo"
              className="aspect-[2/1] col-span-2 lg:col-span-1 overflow-hidden rounded-lg object-contain object-center"
              height="70"
              src="/placeholder.svg"
              width="140"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Experience the workflow the best frontend teams love.
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing
              infrastructure with automated CI/CD.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
