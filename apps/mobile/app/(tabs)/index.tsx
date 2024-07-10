import { HomePostList } from '@/components/screen/home/home-post-list';
import { HomeStory } from '@/components/screen/home/home-story';
import { SocialHomeHeader } from '@/components/screen/home/social-home-header';
import { Screen } from '@/components/layout';

const HomeScreen = () => {
	return (
		<Screen checkLogin={true}>
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
