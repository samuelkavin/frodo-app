/* eslint-disable import/no-extraneous-dependencies */
import FrodoPageSimple from '@frodo/core/PageSimple';
import { styled } from '@mui/material/styles';
import { useRef, useCallback } from 'react';
import Map, { MapRef } from 'react-map-gl';
import MapsControl from './MapsControl';
import './Maps.css';

const MAPBOX_TOKEN = '<TOKEN>';

const initialViewState = {
	latitude: 37.7751,
	longitude: -122.4193,
	zoom: 11,
	bearing: 0,
	pitch: 0
};

const Root = styled(FrodoPageSimple)(({ theme }) => ({
	'& .FrodoPageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.divider
	}
}));

function Maps() {
	const mapRef = useRef<MapRef>();
	const onSelectCity = useCallback(({ longitude, latitude }) => {
		mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
	}, []);

	return (
		<Root
			header={
				<div className="flex items-center justify-between p-24 pr-0">
					<h4>Maps</h4>
					<MapsControl onSelectCity={onSelectCity} />
				</div>
			}
			content={
				<div>
					<Map
						ref={mapRef}
						initialViewState={initialViewState}
						mapStyle="mapbox://styles/mapbox/light-v9"
						mapboxAccessToken={MAPBOX_TOKEN}
					/>
				</div>
			}
		/>
	);
}

export default Maps;
