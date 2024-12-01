import { NoteCard } from "../components/NoteCard";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NoteAdd } from "../components/NoteAdd";
import { useState } from "react";
import { Header } from "@/components/Header";

export function NoteLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 ml-10 mr-10 mb-8">
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="w-12 h-12 rounded-full"
                onClick={() => setIsOpen(true)}
              >
                <Plus />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create notes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <NoteAdd isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
