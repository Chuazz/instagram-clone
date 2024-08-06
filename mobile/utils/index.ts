import { i18n } from '@/configs/i18n';
import { app$ } from '@/store/app';
import { KeyValueType } from '@/types/common';

const trans = (key: string, param?: KeyValueType<string, string>) => {
    const data = i18n.t(key, param);

    i18n.locale = app$.locale.get();
    i18n.defaultLocale = app$.locale.get();

    return data;
};

const beauty = (
    data?: string | number | boolean | object,
    message?: string,
) => {
    console.log(
        `beauty log ${message ? '<' + message + '>: ' : ''}`,
        JSON.stringify(data, null, 2),
    );
};

export { trans, beauty };
