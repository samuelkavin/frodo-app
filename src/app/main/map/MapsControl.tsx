/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CITIES from './data.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MapsControl({ onSelectCity }: any) {
	return (
		<FormControl>
			<RadioGroup
				row
				aria-labelledby="demo-radio-buttons-group-label"
				defaultValue="San Francisco"
				name="radio-buttons-group"
			>
				{CITIES.filter((city) => city.state === 'California').map((response, index) => (
					<FormControlLabel
						key={index}
						value={response.city}
						control={<Radio />}
						label={response.city}
						onChange={() => onSelectCity(response)}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
}

export default React.memo(MapsControl);
