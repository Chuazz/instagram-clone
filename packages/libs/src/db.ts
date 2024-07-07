import { createDirectus, rest } from '@directus/sdk';
import { BASE_API_URL } from '@super-app/configs/src';

const client = createDirectus(BASE_API_URL).with(rest());

export { client };
