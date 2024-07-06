import { User } from './user';

type Post = {
	id: number;
	images: string[];
	thumbnail: string;
	user: User;
};

export type { Post };
