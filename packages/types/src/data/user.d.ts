type User = {
	id: string;
	first_name: string;
	email: string;
	password: string;
	location: unknown;
	title: unknown;
	description: unknown;
	tags: unknown;
	avatar: string;
	language: unknown;
	tfa_secret: unknown;
	status: string;
	role: string;
	token: unknown;
	last_access: string;
	last_page: string;
	provider: string;
	external_identifier: unknown;
	auth_data: unknown;
	email_notifications: boolean;
	appearance: unknown;
	theme_dark: unknown;
	theme_light: unknown;
	theme_light_overrides: unknown;
	theme_dark_overrides: unknown;
	gender: 'male' | 'female';
	user_name: string;
	checked: boolean;
};

export type { User };
