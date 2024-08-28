import { i18n } from '@instagram/configs';
import { app$ } from '@instagram/stores';
import type { KeyValueType } from '@instagram/types';

const trans = (key: string, param?: KeyValueType<string, string>) => {
	const data = i18n.t(key, param);

	i18n.locale = app$.locale.get();
	i18n.defaultLocale = app$.locale.get();

	return data;
};

export { trans };
export * from './db';
