import FrodoPageSimple from '@frodo/core/PageSimple';
import { styled } from '@mui/material/styles';
import AvatarList from './AvatarList';
import './Avatar.css';

const Root = styled(FrodoPageSimple)(({ theme }) => ({}));

function Avatar() {
	return (
		<Root
			content={
				<div className="p-24 w-full">
					<div className="flex justify-center mb-20">
						<h2 className="text-3xl font-semibold">Choose Avatar</h2>
					</div>
					<div className="flex">
						<AvatarList />
					</div>
				</div>
			}
		/>
	);
}

export default Avatar;
