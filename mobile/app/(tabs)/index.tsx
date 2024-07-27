import { Screen } from '@/components/layout';
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

export default HomeScreen;
