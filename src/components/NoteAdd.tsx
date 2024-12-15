import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import CreatableSelect from "react-select/creatable";
import { Toaster } from "@/components/ui/toaster";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { preprocess, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "@/utils/axiosInstance";
import { ToastAction } from "./ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function NoteAdd({ isOpen, setIsOpen, getAllNotes }: any) {
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });

  const defaultOptions = [
    createOption("Food"),
    createOption("Bills"),
    createOption("Wants"),
  ];

  const [value, setValue] = useState([]);
  const [options, setOptions] = useState(defaultOptions);

  console.log(value);

  const handleCreateOption = (inputValue: string) => {
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setOptions((prev) => [...prev, newOption]);
      setValue((prev) => [...prev, newOption]);
    });
  };

  const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  // onsubmit of add note function
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const tag = value.map((option) => option.value);
      const response = await axiosInstance.post("/add-note", {
        title: values.title,
        content: values.content,
        tags: tag,
      });

      console.log("ine: ", response);

      if (response.data && response.data.note) {
        getAllNotes();
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Form {...form}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Note</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Note title
                </Label>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormControl>
                        <Input placeholder="Enter note title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="content" className="text-right">
                  Note content
                </Label>
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormControl>
                        <Textarea
                          placeholder="Type your content here."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tags" className="text-right">
                  Note Tag
                </Label>
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormControl>
                        <CreatableSelect
                          isClearable
                          isMulti
                          options={options}
                          onChange={(newValue) => {
                            const tags = newValue
                              ? newValue.map((option) => option.value)
                              : [];
                            field.onChange(tags); // Update the form's value
                            setValue(newValue); // Update the local state for the select component
                          }}
                          onCreateOption={handleCreateOption}
                          value={value}
                          placeholder="Select example or create new"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Close
              </Button>
              <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Form>
      </Dialog>
      <Toaster />
    </>
  );
}
