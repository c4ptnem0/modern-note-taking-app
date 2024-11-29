import { NoteCard } from "./NoteCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Label } from "./ui/label";
import { LogOutIcon, MoonStarIcon, Plus, Search, Sun } from "lucide-react";
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
import { DialogClose } from "@radix-ui/react-dialog";
import { NoteAdd } from "./NoteAdd";
import { useState } from "react";

export function NoteLayout() {
  const [isOpen, setIsOpen] = useState(false);
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
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "light" ? <MoonStarIcon /> : <Sun />}
              </Button>

              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost" size="icon">
                    <LogOutIcon />
                  </Button>
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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 ml-8 mr-8 mb-8">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
      <div className="fixed bottom-0 right-0 mb-6 mr-6">
        <Button
          className="w-12 h-12 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <Plus />
        </Button>
        <NoteAdd isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
