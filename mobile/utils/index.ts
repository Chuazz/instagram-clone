import { i18n } from '@/configs';
import { app$ } from '@/store';
import { KeyValueType } from '@/types';

const trans = (key: string, param?: KeyValueType<string, string>) => {
    const data = i18n.t(key, param);

    i18n.locale = app$.locale.get();
    i18n.defaultLocale = app$.locale.get();

    return data;
};

const beauty = (data: string | number | boolean | object) => {
    console.log('beauty log: ', JSON.stringify(data, null, 2));
};

export { trans, beauty };
export * from './db';
