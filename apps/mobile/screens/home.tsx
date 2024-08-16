import { Screen } from '@/components/layout/screen';
import { HomeHeader } from '@/components/screen/home/home-header';
import { HomePostList } from '@/components/screen/home/home-post-list';
import { HomeStory } from '@/components/screen/home/home-story';
import type { ScreenProps } from '@instagram/types';

const HomeScreen = ({ navigation }: ScreenProps<'HomeScreen'>) => {
	return (
		<Screen navigation={navigation}>
			<HomePostList
				listHeader={
					<>
						<HomeHeader />

						<HomeStory />
					</>
				}
			/>
		</Screen>
	);
};

export { HomeScreen };
