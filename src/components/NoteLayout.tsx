import { NoteCard } from "./NoteCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Label } from "./ui/label";
import { LogOutIcon, MoonStarIcon, Sun } from "lucide-react";
import { Separator } from "./ui/separator";
import { useTheme } from "./themes/theme-provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function NoteLayout() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 py-2 drop-shadow">
        <h2
          className={`text-xl font-medium py-2 ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Simple Notes
        </h2>
        <div className="flex items-center space-x-2 rounded-md w-1/4">
          <Input type="text" placeholder="Search notes" />
          <Button type="submit">Search</Button>
        </div>
        <div className="flex h-6 items-center space-x-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Label>Joshua Advincula</Label>
          <Separator orientation="vertical" />
          <div>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? <MoonStarIcon /> : <Sun />}
            </Button>
            <Button variant="ghost" size="icon">
              <Dialog>
                <DialogTrigger>
                  <LogOutIcon />
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
                    <Button type="submit" variant="outline">
                      Cancel
                    </Button>
                    <Button type="submit">Logout</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </Button>
          </div>
        </div>
      </div>
      <Separator />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
      <div>{/* create note functiopn here! */}</div>
    </>
  );
}
