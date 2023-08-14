import * as z from "zod";

//register schema model
export const registerUserSchema = z.object({
  email: z.string().email({
    message: "Ingresa un email válido por favor",
  }),
  password: z
    .string()
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "La contraseña debe tener minmo 8 caracteres y al menos: una mayuscula, una minúscula, un numero y un caracter especial",
    }),
});

export type RegisterUserValues = z.infer<typeof registerUserSchema>;

//register schema model
export const loginSchema = z.object({
  email: z.string().email({
    message: "Ingresa un email válido por favor",
  }),
  password: z
    .string()
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "La contraseña debe tener minmo 8 caracteres y al menos: una mayuscula, una minúscula, un numero y un caracter especial",
    }),
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
