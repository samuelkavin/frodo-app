/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import FrodoPageSimple from '@frodo/core/PageSimple';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PlayLocationList from './PlayLocationList';
import BOTS from './data.json';

export type BotsType = {
	name: string;
	batteryLevel: number;
	status: string;
	location: string;
};

const Root = styled(FrodoPageSimple)(({ theme }) => ({}));

function Play() {
	const [selectedStatus, setSelectedStatus] = useState('');
	const uniqueStatuses = BOTS.map((bot) => bot.status).filter(
		(status, index, self) => index === self.indexOf(status)
	);

	const handleStatusChange = (event) => {
		setSelectedStatus(event.target.value);
	};

	const filteredBots = selectedStatus ? BOTS.filter((bot) => bot.status === selectedStatus) : BOTS;

	return (
		<Root
			header={
				<div className="flex justify-between items-center bg-[#e5e9ed] p-24">
					<h4>Let's Play</h4>
					<FormControl>
						<FormLabel id="demo-row-radio-buttons-group-label">Filter by Status</FormLabel>

						<RadioGroup
							row
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="San Francisco"
							name="radio-buttons-group"
							value={selectedStatus}
							onChange={handleStatusChange}
						>
							{uniqueStatuses.map((status: string, index) => (
								<FormControlLabel
									key={index}
									value={status}
									control={<Radio />}
									label={status}
									className="capitalize"
								/>
							))}
						</RadioGroup>
					</FormControl>
				</div>
			}
			content={
				<div className="p-24 w-full">
					<div className="flex justify-center mb-20">
						<h2 className="text-3xl font-semibold">Choose Location</h2>
					</div>
					<div className="flex">
						<PlayLocationList filteredBots={filteredBots} />
					</div>
				</div>
			}
		/>
	);
}

export default Play;
