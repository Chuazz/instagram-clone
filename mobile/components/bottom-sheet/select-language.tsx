import { i18n, SUPPORT_LANGUAGES } from '@/configs';
import { app$ } from '@/store';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { BottomSheetFlatList, SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import { observer } from '@legendapp/state/react';
import { Text, useDripsyTheme, View } from 'dripsy';
import { reloadAsync } from 'expo-updates';
import { Button, Image } from '../ui';

const SelectLanguage = observer(() => {
    const { theme } = useDripsyTheme();

    return (
        <BottomSheetFlatList
            keyExtractor={(item) => item.code}
            data={SUPPORT_LANGUAGES}
            getItemLayout={(item, index) => ({
                length: SCREEN_WIDTH - 24,
                offset: SCREEN_WIDTH * index,
                index,
            })}
            contentContainerStyle={{
                backgroundColor: theme.colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingBottom: 12,
                overflow: 'hidden',
            }}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={
                <>
                    <Image
                        source='LoginBackgroundImage'
                        sx={{
                            width: 'full',
                            height: 'full',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                    />

                    <View
                        sx={{
                            position: 'absolute',
                            top: 0,
                            width: 'screenWidth',
                            alignItems: 'center',
                        }}
                    >
                        <FontAwesome6
                            name='minus'
                            size={28}
                            color='gray'
                        />
                    </View>

                    <View
                        sx={{
                            mt: 'lg',
                            gap: 'sm',
                            p: 'md',
                        }}
                    >
                        <AntDesign
                            name='close'
                            size={24}
                            color='black'
                        />

                        <Text
                            sx={{
                                fontSize: 'xl',
                                fontWeight: 'bold',
                            }}
                        >
                            {i18n.t('common.select_your_language')}
                        </Text>
                    </View>
                </>
            }
            renderItem={({ item, index }) => (
                <View
                    sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mx: 'md',
                        backgroundColor: 'white',
                        padding: 'md',
                        elevation: 2,
                        borderTopLeftRadius: !index ? 'md' : 0,
                        borderTopRightRadius: !index ? 'md' : 0,
                        borderBottomLeftRadius:
                            index === SUPPORT_LANGUAGES.length - 1 ? 'md' : 0,
                        borderBottomRightRadius:
                            index === SUPPORT_LANGUAGES.length - 1 ? 'md' : 0,
                    }}
                >
                    <Text sx={{ color: 'black', fontWeight: 'semibold' }}>
                        {item.label}
                    </Text>

                    <Button
                        variant='transparent'
                        onPress={async () => {
                            await reloadAsync();

                            app$.locale.set(item.code);
                        }}
                    >
                        <Image
                            source={
                                item.code === app$.locale.get()
                                    ? 'CheckBoxIcon'
                                    : 'UnCheckBoxIcon'
                            }
                            sx={{
                                size: 20,
                                width: 20,
                            }}
                            tintColor={
                                item.code === app$.locale.get()
                                    ? theme.colors.primary700
                                    : theme.colors.gray400
                            }
                        />
                    </Button>
                </View>
            )}
        />
    );
});

export { SelectLanguage };
