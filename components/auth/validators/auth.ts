import * as z from "zod";

//register schema model
export const registerUserSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z
    .string()
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "The password must be at least 8 characters long and contain at least: one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
});

export type RegisterUserValues = z.infer<typeof registerUserSchema>;

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z
    .string()
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "The password must be at least 8 characters long and contain at least: one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
