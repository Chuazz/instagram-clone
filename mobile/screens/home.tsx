import { Screen } from '@/components/layout/screen';
import { HomeHeader } from '@/components/screen/home/home-header';
import { HomePostList } from '@/components/screen/home/home-post-list';
import { HomeStory } from '@/components/screen/home/home-story';
import { ScreenProps } from '@/types/route';
import React from 'react';

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
