import { Button } from '@/components/form/button';
import { Screen } from '@/components/layout/screen';
import { HomeHeader } from '@/components/screen/home/home-header';
import { HomePostList } from '@/components/screen/home/home-post-list';
import { HomeStory } from '@/components/screen/home/home-story';
import type { ScreenProps } from '@/types/routes';
import { app$ } from '@instagram/stores';

const HomeScreen = ({ navigation }: ScreenProps<'MainTab'>) => {
	return (
		<Screen navigation={navigation}>
			<HomePostList
				listHeader={
					<>
						<HomeHeader />

						<HomeStory />

						<Button
							content='logout'
							onPress={() => {
								app$.logOut();
							}}
						/>
					</>
				}
			/>
		</Screen>
	);
};

export { HomeScreen };
