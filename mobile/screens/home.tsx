import { Screen } from '@/components/layout/screen';
import {
    HomePostList,
    HomeStory,
    SocialHomeHeader,
} from '@/components/screen/home';

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

export { HomeScreen };
