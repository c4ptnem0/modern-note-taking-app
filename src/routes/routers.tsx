import { NoteLayout } from "@/layouts/NoteLayout";
import { Login } from "@/views/Login";
import { Signup } from "@/views/Signup";

// Define route paths
export const Routes = [
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <NoteLayout /> },
];
