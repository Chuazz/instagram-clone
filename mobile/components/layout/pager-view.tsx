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
import { observer, useEffectOnce, useObservable } from '@legendapp/state/react';
import { Observable } from '@legendapp/state';

type PagerViewProps = {
    children: ReactNode;
    itemWidth?: number;
    sx?: SxProp;
    initial?: number;
};

type PagerViewRef = {
    scrollTo: (_index: number) => void;
    index$: Observable<number>;
};

const PagerView = observer(
    forwardRef<PagerViewRef, PagerViewProps>(
        ({ children, sx, itemWidth = SCREEN_WIDTH, initial = 0 }, ref) => {
            const scrollRef = useRef<RNScrollView>(null);
            const index$ = useObservable(initial);

            const scrollTo = useCallback((index: number) => {
                scrollRef.current?.scrollTo({
                    x: index * itemWidth,
                });

                index$.set(index);
            }, []);

            useEffectOnce(() => {
                scrollTo(initial);
            }, []);

            useImperativeHandle(ref, () => ({
                scrollTo,
                index$,
            }));

            return (
                <ScrollView
                    ref={scrollRef}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    scrollEnabled={false}
                    contentContainerSx={{
                        flexGrow: 1,
                        ...sx,
                    }}
                >
                    {children}
                </ScrollView>
            );
        },
    ),
);

PagerView.displayName = 'PagerView';

export { PagerView, PagerViewRef };
