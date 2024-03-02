import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export const validateEnv = (env: Record<string, any>) => {
  const _env = envSchema.safeParse(env);

  if (!_env.success) {
    console.error('Invalid environment variables');

    throw new Error('Invalid environment variables');
  }

  return _env.data;
};

export type Env = z.infer<typeof envSchema>;
