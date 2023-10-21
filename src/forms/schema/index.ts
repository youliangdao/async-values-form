import * as z from "zod";

export const FormSchema = z.object({
  userId: z.number(),
  accountName: z.string(),
  email: z.string().email(),
  albumId: z.number(),
  photoId: z.number(),
  thumbnail: z.string(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
