import {
	Input as TamaguiInput,
	InputProps as TamaguiInputProps,
} from 'tamagui';

const Input = (props: TamaguiInputProps) => {
	return (
		<TamaguiInput
			size='$5'
			backgroundColor='#fefefe'
			placeholderTextColor='#a7a8aa'
			borderWidth={1}
			borderColor='$gray7Light'
			fontSize={15}
			{...props}
		/>
	);
};

export { Input };
