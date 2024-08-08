import { modal } from '@/configs/modal';
import React, { ReactNode } from 'react';
import {
    ModalOptions,
    ModalProvider as RNModalProvider,
    createModalStack,
} from 'react-native-modalfy';

const defaultOptions: ModalOptions = {
    backdropOpacity: 0.4,
    backBehavior: 'clear',
    disableFlingGesture: true,
};

const stack = createModalStack(modal, defaultOptions);

const ModalProvider = ({ children }: { children: ReactNode }) => (
    <RNModalProvider stack={stack}>{children}</RNModalProvider>
);

export { ModalProvider };
