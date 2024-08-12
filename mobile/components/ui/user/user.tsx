import { Button } from '@/components/form/button';
import { User as UserType } from '@/types/data/user';
import { Observable } from '@legendapp/state';
import { observer, useObservable } from '@legendapp/state/react';
import { SxProp } from 'dripsy';
import { createContext, ReactNode, useContext } from 'react';

type UserContextType = {
    data: UserType;
};

type UserProps = {
    children: ReactNode;
    data: UserType;
    sx?: SxProp;
    onPress?: () => void;
};

const UserContext = createContext<Observable<UserContextType> | null>(null);

const User = observer(({ children, data, sx, onPress }: UserProps) => {
    const value$ = useObservable<UserContextType>({
        data,
    });

    return (
        <UserContext.Provider value={value$}>
            <Button
                variant='transparent'
                sx={sx}
                onPress={onPress}
            >
                {children}
            </Button>
        </UserContext.Provider>
    );
});

const useUser = () => {
    const context = useContext(UserContext);

    return context;
};

export { User, UserContext, useUser };
