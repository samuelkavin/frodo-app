import React from 'react';
import { injectReducers } from 'app/store';
import { SlicesType } from 'app/store/lazyWithSlices';
import generateReducersFromSlices from './generateReducersFromSlices';

export const injectReducersGroupedByCommonKey = async (slices: SlicesType) => {
	injectReducers(generateReducersFromSlices(slices));
	return true;
};

const withSlices =
	<P extends object>(slices: SlicesType) =>
		(WrappedComponent: React.FC<P>) => {
			injectReducersGroupedByCommonKey(slices);

			return function WithInjectedReducer(props: P) {
				return <WrappedComponent {...props} />;
			};
		};

export default withSlices;
