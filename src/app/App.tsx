import BrowserRouter from 'src/@frodo/core/BrowserRouter';
import FrodoLayout from '@frodo/core/Layout/Layout';
import FrodoTheme from '@frodo/core/Theme';
import { SnackbarProvider } from 'notistack';
import { useSelector } from 'react-redux';
import themeLayouts from 'app/layout/themeLayouts';
import { selectMainTheme } from 'app/store/slices/settingsSlice';
import withAppProviders from './withAppProviders';

function App() {
	const mainTheme = useSelector(selectMainTheme);

	return (
		<FrodoTheme theme={mainTheme}>
			<BrowserRouter>
				<SnackbarProvider
					maxSnack={5}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right'
					}}
					classes={{
						containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99'
					}}
				>
					<FrodoLayout layouts={themeLayouts} />
				</SnackbarProvider>
			</BrowserRouter>
		</FrodoTheme>
	);
}

export default withAppProviders(App);
