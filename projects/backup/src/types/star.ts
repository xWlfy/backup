import { z } from 'zod';

export const StarSchema = z.object({
  id: z.string(),
  name: z.string(),
  coordinates: z.object({
    ra: z.number(),
    dec: z.number(),
  }),
  magnitude: z.number(),
  distance: z.number(),
});

export type Star = z.infer<typeof StarSchema>;