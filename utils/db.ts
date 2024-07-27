import { BASE_API_URL } from '@/configs';
import { createDirectus, rest } from '@directus/sdk';

const client = createDirectus(BASE_API_URL).with(rest());

export { client };
