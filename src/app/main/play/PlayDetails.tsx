import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Snackbar from '@mui/material/Snackbar';
import { useAppDispatch } from 'app/store';
import { showMessage } from 'app/store/slices/messageSlice';

import './Play.css';

function PlayDetails({ selectedItem }) {
	const dispatch = useAppDispatch();
	const [open, setOpen] = React.useState(false);

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<div className="flex justify-center items-center text-xl w-1/2">
			<div className="font-mono">
				{selectedItem && (
					<>
						<div className="flex flex-col text-center min-w-[400px] min-h-[150px]">
							<div>Name: {selectedItem.name}</div>
							<div>Location: {selectedItem.location}</div>
							<div>Battery: {selectedItem.batteryLevel}%</div>
							<div>Status: {selectedItem.status}</div>
						</div>
						<div className="flex justify-center">
							<button
								type="button"
								className="flex text-black bg-[#8cff92] p-10 disabled:bg-[#999999]"
								disabled={selectedItem.status !== 'available'}
								onClick={() =>
									dispatch(
										showMessage({
											message: 'Game is loading...',
											autoHideDuration: 161000,
											variant: 'success',
											anchorOrigin: {
												vertical: 'top',
												horizontal: 'center'
											}
										})
									)
								}
							>
								<PlayCircleOutlineIcon className="mr-5" />
								Play
							</button>
						</div>
					</>
				)}
			</div>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message="Note archived"
			/>
		</div>
	);
}

export default PlayDetails;
