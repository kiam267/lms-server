const { z } = require('zod');

const signupSchema = z.object({
   username: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(3, { message: "Name must be at least 3 characters" })
      .max(255, { message: "Name must be at most 255 characters" }),
   
   email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email({ message: "Invalid is required" })
      .min(3, { message: "Email must be at least 10 characters" })
      .max(255, { message: "Email must be at most 255 characters" }),

   phone: z
      .string({ required_error: "Phone is required" })
      .trim()
      .min(10, { message: "Phone must be at least 3 characters" })
      .max(255, { message: "phone must be at most 255 characters" }),

   password: z
      .string({ required_error: "Password is required" })
      .trim()
      .min(10, { message: "Password must be at least 10 characters" })
      .max(400, { message: "Pasword can't  be genarate than 400 characters" }),
   
});


module.exports = signupSchema;