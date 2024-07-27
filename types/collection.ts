import { Post } from './data/post';
import { User } from './data/user';

type CollectionType = {
	post: Post;
	user: User;
};

type CollectionArrayType = 'post' | 'user';

export type { CollectionType, CollectionArrayType };
