import { createDirectus, rest } from '@directus/sdk';

console.log('process.env', process.env);

const client = createDirectus('http://localhost').with(rest());

const getAssetsUrl = (id?: string) => {
	return `${process.env.EXPO_PUBLIC_API_URL}/assets/${id}`;
};

export { client, getAssetsUrl };
