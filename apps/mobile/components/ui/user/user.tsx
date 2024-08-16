import { Button } from '@/components/form/button';
import type { User as UserType } from '@instagram/types/data';
import type { Observable } from '@legendapp/state';
import { observer, useObservable } from '@legendapp/state/react';
import type { SxProp } from 'dripsy';
import { type ReactNode, createContext, useContext } from 'react';

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
			<Button variant='transparent' sx={sx} onPress={onPress}>
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
