import { INPUT_HEIGHT } from '@/configs';
import { observer, Show, useObservable } from '@legendapp/state/react';
import { Text, TextInput, View } from 'dripsy';
import { DripsyTextInputProps } from 'dripsy/build/core/components/TextInput';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

const Input = observer((props: DripsyTextInputProps) => {
    const focus$ = useObservable(props.autoFocus);

    const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        focus$.set(true);

        props.onFocus?.(e);
    };

    const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        focus$.set(false);

        props.onBlur?.(e);
    };

    return (
        <View
            sx={{
                height: INPUT_HEIGHT,
                borderRadius: 'md',
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: focus$.get() ? 'primary950' : 'gray200',
                paddingHorizontal: 16,
                justifyContent: 'center',
            }}
        >
            <Show if={focus$}>
                <Text
                    sx={{
                        fontSize: 'sm',
                        color: 'primary950',
                    }}
                >
                    {props.placeholder}
                </Text>
            </Show>

            <TextInput
                {...props}
                placeholder={focus$.get() ? '' : props.placeholder}
                cursorColor='black'
                onFocus={onFocus}
                onBlur={onBlur}
                sx={{
                    height: focus$.get() ? 'auto' : 'full',
                    paddingVertical: 0,
                    ...props.sx,
                }}
            />
        </View>
    );
});

export { Input };
