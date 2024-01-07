/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable import/no-extraneous-dependencies */
import FrodoPageSimple from '@frodo/core/PageSimple';
import { styled } from '@mui/material/styles';
import './Play.css';
import React, { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayDetails from './PlayDetails';
import BOTS from './data.json';

export type BotsType = {
	name: string;
	batteryLevel: number;
	status: string;
	location: string;
};

const Root = styled(FrodoPageSimple)(({ theme }) => ({}));

function Play() {
	const [selectedItem, setSelectedItem] = useState(null);
	const [selectedItemIndex, setSelectedItemIndex] = useState(null);
	const [selectedStatus, setSelectedStatus] = useState('');

	const uniqueStatuses = BOTS.map((bot) => bot.status).filter(
		(status, index, self) => index === self.indexOf(status)
	);

	const handleStatusChange = (event) => {
		setSelectedStatus(event.target.value);
	};

	const filteredBots = selectedStatus ? BOTS.filter((bot) => bot.status === selectedStatus) : BOTS;

	const handleListItemClick = (response, index) => {
		setSelectedItemIndex(index);
		setSelectedItem(response);
	};

	useEffect(() => {
		if (BOTS.length > 0) {
			const { name, location, status, batteryLevel } = BOTS[0];
			setSelectedItem({ name, location, status, batteryLevel });
			setSelectedItemIndex(0);
		}
	}, []);

	return (
		<Root
			header={
				<div className="p-24">
					<h4>Let's Play</h4>
				</div>
			}
			content={
				<div className="p-24 w-full bg-[#000] text-[#8cff92]">
					<div className="flex">
						<div className="w-1/2">
							<div className="flex">
								<FormControl>
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
							<div className="flex h-[500px] overflow-y-auto">
								<div className="w-full">
									<List>
										{filteredBots.map((response, index) => (
											<ListItem
												key={response.name}
												className={`border-b-1 border-[#3a4e3b] cursor-pointer bot-list ${index === selectedItemIndex ? 'selected-bot' : ''}`}
												onClick={() => handleListItemClick(response, index)}
											>
												<ListItemIcon>
													<SmartToyIcon className="text-green-400" />
												</ListItemIcon>
												<ListItemText
													primary={response.name}
													secondary={
														<>
															<LocationOnIcon className="text-lg mr-2.5" />
															{response.location}
														</>
													}
												/>
												<ListItemIcon>
													<ChevronRightIcon className="text-green-400" />
												</ListItemIcon>
											</ListItem>
										))}
									</List>
								</div>
							</div>
						</div>
						<div className="flex justify-center items-center text-xl w-1/2">
							<PlayDetails selectedItem={selectedItem} />
						</div>
					</div>
				</div>
			}
		/>
	);
}

export default Play;
