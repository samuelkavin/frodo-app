import { injectReducer } from 'app/store';
import { Reducer } from '@reduxjs/toolkit';

const withReducer =
	<P extends object>(key: string, reducer: Reducer) =>
		(WrappedComponent: React.FC<P>) => {
			injectReducer(key, reducer);

			return function WithInjectedReducer(props: P) {
				return <WrappedComponent {...props} />;
			};
		};

export default withReducer;
