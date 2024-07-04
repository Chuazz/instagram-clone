type LanguageType = 'vi' | 'en';

type OptionType<TCode = string> = {
	code: TCode;
	label: string;
};

type KeyValueType<TKey = string, TValue = string | number | boolean> = {
	[key in TKey]: TValue;
};

export type { OptionType, KeyValueType, LanguageType };
