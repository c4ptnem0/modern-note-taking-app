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
