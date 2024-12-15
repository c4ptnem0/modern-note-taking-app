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
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/utils/axiosInstance";
import { NoteProps, NotesProps } from "@/types/type";
import { all } from "axios";

export function NoteLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<NoteProps["user"]>();
  const [allNotes, setAllNotes] = useState([]);
  const navigate = useNavigate();

  // Get logged in user info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get<NoteProps>("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error?.response.status === 401) {
        localStorage.clear();
        navigate("/");
      }
    }
  };

  // Get all notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get<{ notes: NotesProps[] }>(
        "/get-notes"
      );

      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexpected error has occured. Please try again.");
    }
  };

  useEffect(() => {
    getUserInfo();
    getAllNotes();
  }, []);

  console.log("notes: ", allNotes);

  return (
    <>
      <Header userInfo={userInfo} />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 ml-10 mr-10 mb-8">
          {allNotes.map((item) => (
            <NoteCard
              key={item._id}
              title={item.title}
              content={item.content}
              tags={item.tags}
              date={item.createdOn}
            />
          ))}
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
