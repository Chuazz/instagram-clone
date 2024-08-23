import type { Post } from './data/post';
import type { User } from './data/user';

type SystemCollectionType = {
	user: User;
};

type CollectionType = {
	post: Post;
};

export type { CollectionType, SystemCollectionType };
