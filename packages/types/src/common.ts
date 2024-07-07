type LanguageType = 'vi' | 'en';

type OptionType<TCode = string> = {
	code: TCode;
	label: string;
};

type KeyValueType<
	TKey extends string | number | symbol = string,
	TValue = string | number | boolean | object,
> = {
	[key in TKey]: TValue;
};

export type { OptionType, KeyValueType, LanguageType };
