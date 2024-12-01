import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const noteSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  createdOn: { type: Date, default: new Date().getTime() },
});

// Named export
export const Note = model("Note", noteSchema);
