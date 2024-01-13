/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import GameLoader from '@frodo/components/GameLoader';

function PlayLocationList({ filteredBots }) {
	const [location, setlocation] = useState('');
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);

	const handleLocationClick = (location: string) => {
		setOpen(true);
		setlocation(location);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Grid
				container
				rowSpacing={1}
				spacing={3}
				justifyContent="center"
				columnSpacing={{ xs: 1, sm: 3, md: 3 }}
			>
				{filteredBots.map((response, index) => (
					<Grid
						item
						sx={{ mb: 4 }}
						key={index}
					>
						<Card
							sx={{ maxWidth: 300 }}
							className="hover:opacity-50"
							onClick={() => handleLocationClick(response.location as string)}
						>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={`assets/images/locations/${response.url}.jpeg`}
									alt="green iguana"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h6"
									>
										{response.name}
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
									>
										{response.location}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>

			<GameLoader
				name={location}
				isOpen={open}
				onClose={handleClose}
				redirectPath="/play/avatar"
			/>
		</Box>
	);
}

export default PlayLocationList;
