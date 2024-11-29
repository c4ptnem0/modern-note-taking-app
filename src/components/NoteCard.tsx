import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";

export function NoteCard() {
  return (
    <>
      <Card className="transition duration-200 ease-in-out hover:-translate-y-2 hover:drop-shadow-md cursor-pointer z-0">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>December 24, 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
            erat at sem euismod consectetur vitae nec augue. Donec et mollis
            augue. Nunc vulputate vitae magna nec sollicitudin. Sed et leo at
            est finibus viverra quis sit amet lorem.
          </p>
        </CardContent>
        <Separator
          className="justify-self-center md:w-11/12 mb-3"
          orientation="horizontal"
        />
        <CardFooter className="flex items-center justify-between">
          <div className="justify-center space-x-1">
            <Badge variant="secondary">Food</Badge>
            <Badge variant="secondary">Tech</Badge>
            <Badge variant="secondary">Paycheck</Badge>
          </div>
          <div className="flex items-center gap-0 mt-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="ghost" size="sm">
                    <Pencil />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Edit note</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="ghost" size="sm">
                    <Trash2 />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>delete note</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
