import type { Role } from './data';
import type { Post } from './data/post';
import type { User } from './data/user';

type SystemCollectionType = {
	user: User;
	role: Role;
};

type CollectionType = {
	post: Post;
};

export type { CollectionType, SystemCollectionType };
