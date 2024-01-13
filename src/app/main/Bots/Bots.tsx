/* eslint-disable jsx-a11y/alt-text */
import { useState, useMemo } from 'react';
import Map, { Marker, NavigationControl, FullscreenControl, ScaleControl, GeolocateControl } from 'react-map-gl';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Pin from './Pin';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Bots.css';
import CITIES from './data.json';

const TOKEN = 'pk.eyJ1Ijoic2FtdWVsa2F2aW4iLCJhIjoiY2xxeTRrMmFwMGpsdjJsbnI1NWxxeXh6MiJ9.id_XiP7HRn-l9kQALWQs6w';

export default function Bots() {
	const [popupInfo, setPopupInfo] = useState(null);
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const pins = useMemo(
		() =>
			CITIES.map((city, index) => (
				<Marker
					key={`marker-${index}`}
					longitude={city.longitude}
					latitude={city.latitude}
					anchor="bottom"
					onClick={(e) => {
						e.originalEvent.stopPropagation();
						setPopupInfo(city);
						handleClickOpen();
					}}
				>
					<Pin />
				</Marker>
			)),
		[]
	);

	return (
		<Map
			initialViewState={{
				latitude: 40,
				longitude: -100,
				zoom: 3.5,
				bearing: 0,
				pitch: 0
			}}
			mapStyle="mapbox://styles/mapbox/dark-v9"
			mapboxAccessToken={TOKEN}
		>
			<GeolocateControl position="top-left" />
			<FullscreenControl position="top-left" />
			<NavigationControl position="top-left" />
			<ScaleControl />

			{pins}

			{popupInfo && (
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						{popupInfo.city}, {popupInfo.state}
					</DialogTitle>
					<DialogContent className="p-0">
						<div>
							<div className="px-24 pb-24">
								<ul>
									<li>Total Bots: {popupInfo.totalBots}</li>
									<li>Status: {popupInfo.status}</li>
								</ul>
							</div>
							<img
								width="100%"
								src={popupInfo.image}
							/>
						</div>
					</DialogContent>
				</Dialog>
			)}
		</Map>
	);
}
