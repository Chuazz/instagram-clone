import { createDirectus, rest } from '@directus/sdk';

const client = createDirectus(process.env.EXPO_PUBLIC_API_URL).with(rest());

export { client };
