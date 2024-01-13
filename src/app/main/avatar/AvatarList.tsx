/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import GameLoader from '@frodo/components/GameLoader';
import PLAYERS from './data.json';
import './Avatar.css';

function AvatarList() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);

	const handleClick = (title: string) => {
		setOpen(true);
		setSelectedItem(title);
	};

	return (
		<div className="w-full">
			<div className="flex justify-center">
				<ImageList
					sx={{ width: 300 }}
					cols={2}
					gap={40}
				>
					{PLAYERS.map((item) => (
						<ImageListItem key={item.img}>
							<img
								srcSet={`assets/images/players/${item.img}.png`}
								src={`assets/images/players/${item.img}.png`}
								alt={item.title}
								loading="lazy"
								className={`avatar cursor-pointer ${selectedItem === item.title ? 'selected-avatar' : ''
									}`}
								onClick={() => handleClick(item.title)}
							/>
						</ImageListItem>
					))}
				</ImageList>

				<GameLoader
					name={selectedItem}
					isOpen={open}
					timeout={2000}
					onClose={handleClose}
					redirectPath="/play/game"
				/>
			</div>
		</div>
	);
}

export default AvatarList;
