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

import { RegisterUserValues, registerUserSchema } from "./validators/auth";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const form = useForm<RegisterUserValues>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const supabase = createClientComponentClient();


  const onSubmit = async (data: RegisterUserValues) => {
    try {
      setIsSubmitting(true);
      const res = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${location.origin}/api/auth/callback`,
          data: {
            role: "client",
          },
        },
      });
      setIsSubmitting(false);

      if (!res.error) {
        setIsSuccess(true);
      }
      setIsSubmitting(false);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
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
                  <>Registrarse</>
                </Button>
                <div className="text-sm">
                  have account already?{" "}
                  <Link href="/sign-up">
                    <Button variant={"link"}>Login</Button>
                  </Link>
                </div>
              </div>

              {isSuccess && (
                <p className="mt-7 max-w-lg">
                  Enviamos un correo de verificación, revisa la bandeja de spam
                  en caso de que no lo veas.
                </p>
              )}
            </form>
          </Form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
