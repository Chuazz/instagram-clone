import { File } from './file';
import { User } from './user';

type Post = {
	id: number;
	status: string;
	user_created: User;
	date_created: string;
	date_updated: any;
	type: 'reel' | 'post' | 'story';
	images: PostImage[];
	total_likes: number;
	total_comments: number;
	content: string | null;
};

type PostImage = {
	id: number;
	post_id: number;
	directus_files_id: File;
};

export type { Post, PostImage };
