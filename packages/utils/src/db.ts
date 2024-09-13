import { createDirectus, rest } from '@directus/sdk';

const tempAPI = 'http://172.19.33.31:8055';

const client = createDirectus(tempAPI).with(rest());

const getAssetsUrl = (id?: string) => {
	return `${tempAPI}/assets/${id}`;
};

export { client, getAssetsUrl };
