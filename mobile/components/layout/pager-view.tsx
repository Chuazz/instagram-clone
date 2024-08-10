import { SCREEN_WIDTH } from '@/configs/theme';
import { ScrollView, SxProp } from 'dripsy';
import { ScrollView as RNScrollView } from 'react-native';
import {
    forwardRef,
    ReactNode,
    useCallback,
    useImperativeHandle,
    useRef,
} from 'react';

type PagerViewProps = {
    children: ReactNode;
    itemWidth?: number;
    sx?: SxProp;
};

type PagerViewRef = {
    scrollTo: (_index: number) => void;
};

const PagerView = forwardRef<PagerViewRef, PagerViewProps>(
    ({ children, sx, itemWidth = SCREEN_WIDTH }, ref) => {
        const scrollRef = useRef<RNScrollView>(null);

        const scrollTo = useCallback((index: number) => {
            scrollRef.current?.scrollTo({
                y: index * itemWidth,
            });
        }, []);

        useImperativeHandle(ref, () => ({
            scrollTo,
        }));

        return (
            <ScrollView
                ref={scrollRef}
                contentContainerSx={{
                    flexGrow: 1,
                    ...sx,
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                scrollEnabled={false}
            >
                {children}
            </ScrollView>
        );
    },
);

PagerView.displayName = 'PagerView';

export { PagerView, PagerViewRef };
