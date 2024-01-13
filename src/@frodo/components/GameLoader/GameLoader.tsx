/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router';


export type GameLoaderProps = {
	timeout?: number;
	name?: string;
	redirectPath?: string;
	isOpen: boolean;
	onClose: () => void;
};

function GameLoader({ name, timeout = 3000, isOpen, onClose, redirectPath }: GameLoaderProps) {
	const [open, setOpen] = useState(isOpen);
	const [shouldRedirect, setShouldRedirect] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		if (shouldRedirect) {
			onClose();
			navigate(redirectPath);
		}
	}, [shouldRedirect, onClose, navigate, redirectPath]);

	useEffect(() => {
		let timeoutId: any;

		if (isOpen) {
			timeoutId = setTimeout(() => {
				setShouldRedirect(true);
			}, timeout);
		}

		return () => clearTimeout(timeoutId);
	}, [isOpen, timeout]);

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4
	};

	return (
		<Modal
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Box sx={{ mr: '20px' }}>
						<CircularProgress thickness={5} />
					</Box>
					<Box>
						<Box>{name} loading...</Box>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
}

export default GameLoader;
