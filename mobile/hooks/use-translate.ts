import { i18n } from '@/configs';
import { KeyValueType } from '@/types';

const useTranslate = () => {
    return {
        t(key: string, params?: KeyValueType<string, string>) {
            return i18n.t(key, params);
        },
    };
};

export { useTranslate };
