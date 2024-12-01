import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Label } from "../components/ui/label";
import { LogOutIcon, MoonStarIcon, Search, Sun } from "lucide-react";
import { Separator } from "../components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DialogClose } from "@radix-ui/react-dialog";
import { useTheme } from "./themes/theme-provider";

export function Header() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <div
          className={`flex items-center justify-between px-6 py-2 drop-shadow ${
            theme === "light" ? "bg-white" : "bg-black"
          }`}
        >
          <h2
            className={`text-xl font-medium py-2 ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            Simple Notes
          </h2>
          <div className="flex items-center space-x-2 rounded-md w-1/4">
            <Input type="text" placeholder="Search notes" />
            <Button type="submit">
              <Search /> Search
            </Button>
          </div>
          <div className="flex h-6 items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Label>Joshua Advincula</Label>
            <Separator orientation="vertical" />
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                      {theme === "light" ? <MoonStarIcon /> : <Sun />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {theme === "light" ? <p>Dark mode</p> : <p>Light mode</p>}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Dialog>
                <DialogTrigger>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <LogOutIcon />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Logout</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="justify-end">
                    <DialogClose asChild>
                      <Button type="submit" variant="outline">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit">Logout</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <Separator />
      </div>
    </>
  );
}
