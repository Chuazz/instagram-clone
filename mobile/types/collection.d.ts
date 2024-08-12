import { Post } from './data/post';
import { User } from './data/user';

type SystemCollectionType = {
    user: User;
};

type CollectionType = {
    post: Post;
};

export type { CollectionType, SystemCollectionType };
