import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
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
import moment from "moment";
import { NotesProps } from "@/types/type";

export function NoteCard({ title, content, tags, date }: NotesProps) {
  return (
    <>
      <Card className="transition duration-200 ease-in-out hover:-translate-y-2 hover:drop-shadow-md cursor-pointer z-0">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {moment(date).format("Do MMM YYYY")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content.length > 40 ? `${content.slice(0, 80)} ...` : content}</p>
        </CardContent>
        <Separator
          className="justify-self-center md:w-11/12 mb-3"
          orientation="horizontal"
        />
        <CardFooter className="flex items-center justify-between">
          <div className="justify-center space-x-1">
            {tags.map((item) => (
              <Badge variant="secondary">{item}</Badge>
            ))}
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
