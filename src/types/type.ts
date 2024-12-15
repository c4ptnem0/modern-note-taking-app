export type NoteAddProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export type NoteProps = {
  user: {
    id: number;
    fullName: string;
    email: string;
    createOn: string;
  } | null;
};

export type NotesProps = {
  _id: number;
  title: string;
  content: string;
  tags: string[];
  date: string;
};
