const { z } = require('zod');


const conatctSchema = z.object({
   username: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(3, { message: "Name must be at least 3 characters" })
      .max(255, { message: "Name must be at most 255 characters" }),
   email: z
      .string({ required_error: "email is required" })
      .trim()
      .email({ message: "Invalid is Email" })
      .min(10, { message: "Email must be at least 10 characters" })
      .max(255, { message: "Email must be at most 255 characters" }),
   message: z
      .string({ required_error: "message is required" })
      .trim()
      .min(10, { message: "Message must be at least 40 characters" })
      .max(255, { message: "Message must be at most 255 characters" }),
   
});


module.exports = conatctSchema;