import { i18n } from '@/configs';
import { observer, Show, useObservable } from '@legendapp/state/react';
import DateTimePicker, {
    AndroidNativeProps,
    DateTimePickerAndroid,
    IOSNativeProps,
    WindowsNativeProps,
} from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Platform } from 'react-native';
import { Input } from './input';

type DatePickerProps = (
    | IOSNativeProps
    | AndroidNativeProps
    | WindowsNativeProps
) & {
    placeholder?: string;
    show?: boolean;
};

const DatePicker = observer(
    ({ show, placeholder, ...props }: DatePickerProps) => {
        const show$ = useObservable(show);

        return (
            <>
                <Input
                    value={format(props.value, 'dd/MM/yyyy')}
                    placeholder={placeholder}
                    allowClear={false}
                    onFocus={(e) => {
                        show$.set(true);

                        e.currentTarget.blur();

                        DateTimePickerAndroid.open({
                            negativeButton: {
                                label: i18n.t('common.cancel'),
                            },
                            positiveButton: {
                                label: i18n.t('common.set'),
                            },
                            ...props,
                            onChange: (e, date) => {
                                props.onChange?.(e, date);

                                show$.set(false);
                            },
                        } as AndroidNativeProps);
                    }}
                />

                <Show if={Platform.OS === 'ios' && show$.get()}>
                    <DateTimePicker
                        display='spinner'
                        negativeButton={{
                            label: i18n.t('common.cancel'),
                        }}
                        positiveButton={{
                            label: i18n.t('common.set'),
                        }}
                        {...props}
                        onChange={(e, date) => {
                            props.onChange?.(e, date);

                            show$.set(false);
                        }}
                    />
                </Show>
            </>
        );
    },
);

export { DatePicker };
