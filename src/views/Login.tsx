import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FaGoogle, FaGithub } from "react-icons/fa";

export function Login() {
  return (
    <>
      <div className="flex flex-col items-center mt-32">
        <div className="rounded-xl border bg-card text-card-foreground shadow p-12">
          <div className="flex flex-col space-y-1 pb-4">
            <div className="font-semibold tracking-tight text-2xl">
              Login account
            </div>
            <div className="text-sm text-muted-foreground">
              Enter your email below to login to your account
            </div>
          </div>
          <div className="w-full md:w-96">
            <div className="flex flex-col gap-1 mt-4">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col mt-4">
              <Label htmlFor="password" className="mb-2">
                Password
              </Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
            <div className="flex flex-col mt-6">
              <Button>Login</Button>
            </div>
          </div>
          <div className="justify-center">
            <div className="mt-6 grid grid-cols-3 items-center">
              <Separator />
              <span className=" text-xs text-center uppercase">
                or continue with
              </span>
              <Separator />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <Button>
              <FaGithub /> Github
            </Button>
            <Button>
              <FaGoogle /> Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
