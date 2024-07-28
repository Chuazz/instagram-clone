import { INPUT_HEIGHT } from '@/configs';
import { AntDesign } from '@expo/vector-icons';
import { observer, Show, useObservable } from '@legendapp/state/react';
import { Text, TextInput, useDripsyTheme, View } from 'dripsy';
import { DripsyTextInputProps } from 'dripsy/build/core/components/TextInput';
import {
    NativeSyntheticEvent,
    TextInputFocusEventData,
    TextInput as RNTextInput,
} from 'react-native';
import { Button } from './button';
import { useRef } from 'react';

type InputProps = DripsyTextInputProps & {
    errMessage?: string;
};

const Input = observer(({ errMessage, ...props }: InputProps) => {
    const focus$ = useObservable(props.autoFocus);
    const { theme } = useDripsyTheme();
    const ref = useRef<RNTextInput>(null);
    const errColor = theme.colors.red700;

    const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        focus$.set(true);

        props.onFocus?.(e);
    };

    const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        if (!props.value) {
            focus$.set(false);
        }

        props.onBlur?.(e);
    };

    const onChangeText = (text: string) => {
        props.onChangeText?.(text);
    };

    const borderColor = (() => {
        if (focus$.get()) {
            return theme.colors.primary950;
        }

        if (errMessage) {
            return errColor;
        }

        return theme.colors.gray200;
    })();

    return (
        <View sx={{ gap: 'xs' }}>
            <View
                sx={{
                    borderColor,
                    height: INPUT_HEIGHT,
                    borderRadius: 'md',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    paddingHorizontal: 16,
                    justifyContent: 'center',
                }}
            >
                <Show if={focus$}>
                    <Text
                        sx={{
                            fontSize: 'sm',
                            color:
                                errMessage && !focus$.get()
                                    ? errColor
                                    : 'primary950',
                        }}
                    >
                        {props.placeholder}
                    </Text>
                </Show>

                <TextInput
                    placeholderTextColor={
                        errMessage && props.value
                            ? errColor
                            : theme.colors.gray300
                    }
                    cursorColor='black'
                    {...props}
                    ref={ref}
                    placeholder={focus$.get() ? '' : props.placeholder}
                    sx={{
                        height: focus$.get() ? 'auto' : 'full',
                        paddingVertical: 0,
                        paddingRight: 30,
                        fontWeight: 'semibold',
                        ...props.sx,
                    }}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChangeText={onChangeText}
                />

                {props.value && (
                    <Button
                        variant='transparent'
                        center={false}
                        sx={{
                            position: 'absolute',
                            right: 12,
                        }}
                        onPress={() => {
                            props.onChangeText?.('');
                            ref.current?.focus();
                        }}
                    >
                        <AntDesign
                            name='close'
                            size={24}
                            color='gray'
                        />
                    </Button>
                )}

                {errMessage && !focus$.get() && (
                    <View
                        sx={{
                            position: 'absolute',
                            right: 12,
                        }}
                    >
                        <AntDesign
                            name='exclamationcircleo'
                            size={24}
                            color={errColor}
                        />
                    </View>
                )}
            </View>

            {errMessage && (
                <Text
                    sx={{
                        color: errColor,
                    }}
                >
                    {errMessage}
                </Text>
            )}
        </View>
    );
});

export { Input };
