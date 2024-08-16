import type { Post as PostType } from '@instagram/types/data';
import type { Observable } from '@legendapp/state';
import { observer, useObservable } from '@legendapp/state/react';
import { type ReactNode, createContext, useContext } from 'react';

type PostContextType = {
	data: PostType;
	currentPage: number;
	showPage: boolean;
};

const PostContext = createContext<Observable<PostContextType> | null>(null);

const Post = observer(
	({ children, data }: { children: ReactNode; data: PostType }) => {
		const value$ = useObservable<PostContextType>({
			data,
			currentPage: 0,
			showPage: false,
		});

		return (
			<PostContext.Provider value={value$}>{children}</PostContext.Provider>
		);
	},
);

const usePost = () => {
	const context = useContext(PostContext);

	return context;
};

export { Post, usePost };
