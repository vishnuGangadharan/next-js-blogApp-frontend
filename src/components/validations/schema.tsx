import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(7, "Password should be at least 7 characters")
      .refine((values) => /[a-zA-Z]/.test(values), {
        message: "Password must contain letters.",
      })
      .refine((s) => /\d/.test(s), {
        message: "Password must contain numbers.",
      })
      .refine((s) => /[!@#$%^&*(),.?":{}|<>]/.test(s), {
        message: "Password must contain special characters.",
      }),
  });



export  const signupFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long")
      .refine(s => /^[a-zA-Z0-9_-]+$/.test(s), {
        message: "Only letters,No characters allowed",
      }),
    email: z.string().email("Invalid email address"),
    Designation: z.string()
      .min(3,'enter a valid designation')
      .refine(s => /^[a-zA-Z0-9_-]+$/.test(s), {
        message: "Only letters,No characters allowed",
      }),
    password: z.string()
      .min(7, "Password should be at least 7 characters")
      .refine(s => /[a-zA-Z]/.test(s), {
        message: "Password must contain letters.",
      })
      .refine(s => /\d/.test(s), {
        message: "Password must contain numbers.",
      })
      .refine(s => /[!@#$%^&*(),.?":{}|<>]/.test(s), {
        message: "Password must contain special characters.",
      }),
    
  })