import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  accessToken: string;
  user: {
    id: number;
    name: string;
  };
}

export function Login() {
  // State for showing alerts
  const { toast } = useToast();
  const navigate = useNavigate();

  const formSchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // onsubmit of login function
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.email || !values.password) {
      // Show toast notification for invalid email domain
      toast({
        className:
          "fixed top-0 right-0 z-[100] flex max-h-screen w-full sm:max-w-[420px] p-4 mt-6 mr-6",
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Input fields can't be empty!",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }

    if (!values.email.includes("@gmail.com")) {
      // Show toast notification for invalid email domain
      toast({
        className:
          "fixed top-0 right-0 z-[100] flex max-h-screen w-full sm:max-w-[420px] p-4 mt-6 mr-6",
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please use a valid email address",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }

    try {
      // Proceed with valid submission
      const response = await axiosInstance.post<LoginResponse>("/login", {
        email: values.email,
        password: values.password,
      });

      console.log("Form submitted successfully:", values);
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }

      // handle successful login response
    } catch (error) {
      // Handle errors during submission
      console.error("Error submitting form:", error);

      toast({
        className:
          "fixed top-0 right-0 z-[100] flex max-h-screen w-full sm:max-w-[420px] p-4 mt-6 mr-6",
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Email or Password is incorrect!",
        action: <ToastAction altText="Retry">Retry</ToastAction>,
      });
    }
  }

  return (
    <>
      <div className="flex flex-col items-center mt-32">
        <div className="rounded-xl border bg-card text-card-foreground shadow p-12">
          <div className="flex flex-col space-y-1 pb-4">
            <div className="font-semibold tracking-tight text-2xl">
              Login account
            </div>
            <div className="text-sm text-muted-foreground">
              Enter your email below to login to your account
            </div>
          </div>
          <div className="w-full md:w-96">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pasword</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex flex-col mt-6">
                  <Button type="submit">Login</Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="justify-center">
            <div className="mt-6 grid grid-cols-3 items-center">
              <Separator />
              <span className=" text-xs text-center uppercase">
                or continue with
              </span>
              <Separator />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <Button>
              <FaGithub /> Github
            </Button>
            <Button>
              <FaGoogle /> Google
            </Button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
