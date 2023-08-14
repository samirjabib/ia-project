"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { Loader2 } from "lucide-react/dist/esm/lucide-react";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  // Icons,
  Label,
} from "@/design-system";
import { LoginSchemaValues, loginSchema } from "./validators/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<LoginSchemaValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const supabase = createClientComponentClient();

  const onSubmit = async (data: LoginSchemaValues) => {
    setIsSubmitting(true);
    const res = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    console.log(res.data.user);

    if (res?.data.user) {
      setIsSubmitting(false);
      router.push("/dashboard");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter email and password for login to the platform
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="email"
                        id="email"
                        placeholder="example@gmail.com..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Insert a valid email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="password"
                        id="email"
                        placeholder="Insert a password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Insert a valid password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && (
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  <>Submit</>
                </Button>
                <div className="text-sm">
                  Dont have account?
                  <Link href="/sign-in">
                    <Button variant={"link"}>Register</Button>
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
