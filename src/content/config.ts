import { defineCollection, type ImageFunction, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      role: z.string(),
      faculty: z.string(),
      school: z.string(),
      facultyUrl: z.string().url(),
      imageUrl: image(),
    }),
});

const socialCollection = defineCollection({
  type: 'data',
  schema: z.object({
    googleScholar: z
      .string()
      .url()
      .refine((val) => val.includes('scholar.google.com')),
    orcid: z
      .string()
      .url()
      .refine((val) => val.includes('orcid.org')),
        linkedin: z
      .string()
      .url()
      .refine((val) => val.includes('linkedin.com')),
    email: z.string().email()
    //   twitter: z
    //     .string()
    //     .url()
    //     .refine((val) => val.includes('twitter.com')),
    //   github: z
    //     .string()
    //     .url()
    //     .refine((val) => val.includes('github.com')),
  }),
});

const researchSchema = z.object({
  title: z.string(),
  publication: z.string().optional(),
  authors: z.string(),
  pdfUrl: z
    .string()
    .refine((val) => val.endsWith('.pdf'))
    .optional(),
  doi: z.string().url().optional(),
});

const researchCollection = defineCollection({
  type: 'data',
  schema: z.array(researchSchema),
});

const teachingSchema = z.object({
  title: z.string(),
  school: z.string(),
  description: z.string(),
});

const teachingCollection = defineCollection({
  type: 'data',
  schema: z.array(teachingSchema),
});

const dataSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string().url().optional(),
});

const dataCollection = defineCollection({
  type: 'data',
  schema: z.object({
    description: z.string(),
    data: z.array(dataSchema),
  }),
});

const teamSchema = (image: ImageFunction) =>
  z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    role: z.string(),
    description: z.string(),
    website: z.string().url().optional(),
    imageUrl: image(),
  });

const teamCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.array(teamSchema(image)),
});

const cvCollection = defineCollection({
  type: 'data',
  schema: z.object({
    pdfUrl: z.string(),
  }),
});

export const collections = {
  home: homeCollection,
  social: socialCollection,
  research: researchCollection,
  teaching: teachingCollection,
  data: dataCollection,
  team: teamCollection,
  cv: cvCollection,
};
