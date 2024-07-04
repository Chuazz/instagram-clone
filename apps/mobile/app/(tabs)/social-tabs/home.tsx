import { HomeStory } from '@/components/feature/social/home/home-story';
import { SocialHomeHeader } from '@/components/feature/social/home/social-home-header';
import { Screen } from '@/components/layout';

const HomeScreen = () => {
	return (
		<Screen>
			<SocialHomeHeader />

			<HomeStory />
		</Screen>
	);
};

export default HomeScreen;
