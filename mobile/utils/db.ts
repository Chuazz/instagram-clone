import { createDirectus, rest } from '@directus/sdk';

const client = createDirectus(process.env.EXPO_PUBLIC_API_URL).with(rest());

const getAssetsUrl = (id?: string) => {
    return process.env.EXPO_PUBLIC_API_URL + '/assets/' + id;
};

export { client, getAssetsUrl };
