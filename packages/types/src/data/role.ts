type Role = {
	id: string;
	name: string;
	icon: string;
	description: string;
	policies: string[];
	parent: string;
	children: string[];
	users: string[];
};

export type { Role };
