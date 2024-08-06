import { AntDesign } from '@expo/vector-icons';
import { observer, Show, useObservable } from '@legendapp/state/react';
import { Text, TextInput, useDripsyTheme, View } from 'dripsy';
import { DripsyTextInputProps } from 'dripsy/build/core/components/TextInput';
import {
    NativeSyntheticEvent,
    TextInputFocusEventData,
    TextInput as RNTextInput,
} from 'react-native';
import { Button } from '../form/button';
import { useRef } from 'react';
import { Image } from '../ui/image';
import { INPUT_HEIGHT } from '@/configs/theme';
import type { image } from '@/configs/image';

type InputProps = DripsyTextInputProps & {
    errMessage?: string;
    allowClear?: boolean;
    type?: 'string' | 'password';
};

const Input = observer(
    ({
        errMessage,
        type = 'string',
        allowClear = true,
        ...props
    }: InputProps) => {
        const focus$ = useObservable(props.autoFocus || !!props.value);
        const blur$ = useObservable(true);
        const hideInput$ = useObservable(true);
        const { theme } = useDripsyTheme();
        const ref = useRef<RNTextInput>(null);
        const errColor = theme.colors.red700;

        const borderColor = (() => {
            if (focus$.get()) {
                return theme.colors.primary950;
            }

            if (errMessage) {
                return errColor;
            }

            return theme.colors.gray200;
        })();

        const rightIcon: keyof typeof image = (() => {
            if (type === 'password') {
                if (hideInput$.get()) {
                    return 'EyeIcon';
                }

                return 'EyeSlashIcon';
            }

            return 'CloseOutlineIcon';
        })();

        const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            focus$.set(true);
            blur$.set(false);

            props.onFocus?.(e);
        };

        const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            if (!props.value) {
                focus$.set(false);
            }

            blur$.set(true);

            props.onBlur?.(e);
        };

        const onChangeText = (text: string) => {
            props.onChangeText?.(text);
        };

        const onPressRightIcon = () => {
            if (type === 'password') {
                hideInput$.set((prev) => !prev);

                return;
            }

            props.onChangeText?.('');
            ref.current?.focus();
        };

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
                    <Show if={() => focus$.get() && props.placeholder}>
                        <Text
                            sx={{
                                fontSize: 'sm',
                                fontWeight: 'semibold',
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
                        cursorColor={theme.colors.black}
                        secureTextEntry={
                            type === 'password' && hideInput$.get()
                        }
                        {...props}
                        ref={ref}
                        autoCapitalize='none'
                        autoComplete='off'
                        autoCorrect={false}
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

                    <Show if={() => !blur$.get() && props.value && allowClear}>
                        <Button
                            variant='transparent'
                            center={false}
                            sx={{
                                position: 'absolute',
                                right: 12,
                            }}
                            onPress={onPressRightIcon}
                        >
                            <Image
                                source={rightIcon}
                                tintColor='gray'
                                sx={{
                                    width: 'iconLg',
                                    height: 'iconLg',
                                }}
                            />
                        </Button>
                    </Show>

                    <Show if={() => errMessage && !focus$.get()}>
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
                    </Show>
                </View>

                <Show if={() => !!errMessage}>
                    <Text
                        sx={{
                            color: errColor,
                            fontWeight: 'medium',
                        }}
                    >
                        {errMessage}
                    </Text>
                </Show>
            </View>
        );
    },
);

export { Input };
