import { HomePostList } from '@/components/feature/social/home/home-post-list';
import { HomeStory } from '@/components/feature/social/home/home-story';
import { SocialHomeHeader } from '@/components/feature/social/home/social-home-header';
import { Screen } from '@/components/layout';

const HomeScreen = () => {
	return (
		<Screen>
			<HomePostList
				listHeader={
					<>
						<SocialHomeHeader />

						<HomeStory />
					</>
				}
			/>
		</Screen>
	);
};

export default HomeScreen;
