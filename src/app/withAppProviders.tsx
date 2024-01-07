import Provider from 'react-redux/es/components/Provider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StyledEngineProvider } from '@mui/material/styles';
import routes from 'app/configs/routesConfig';
import { useMemo } from 'react';
import store from './store';
import AppContext from './AppContext';

type ComponentProps = {
	name?: string;
};

function withAppProviders(Component: React.ComponentType<ComponentProps>) {
	function WithAppProviders(props: React.PropsWithChildren<ComponentProps>) {
		const val = useMemo(
			() => ({
				routes
			}),
			[routes]
		);

		return (
			<AppContext.Provider value={val}>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<Provider store={store}>
						<StyledEngineProvider injectFirst>
							<Component {...props} />
						</StyledEngineProvider>
					</Provider>
				</LocalizationProvider>
			</AppContext.Provider>
		);
	}

	return WithAppProviders;
}

export default withAppProviders;
