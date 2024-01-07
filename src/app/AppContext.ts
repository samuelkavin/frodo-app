import { createContext } from 'react';
import { RouteObject } from 'react-router/dist/lib/context';

export type AppContextType = {
	routes: RouteObject[];
};

const AppContext = createContext<AppContextType>({ routes: [] });

export default AppContext;
