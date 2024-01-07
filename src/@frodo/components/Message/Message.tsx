import { amber, blue, green } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { hideMessage, selectFrodoMessageOptions, selectFrodoMessageState } from 'app/store/slices/messageSlice';
import { useAppDispatch, useAppSelector } from 'app/store';

export type FrodoMessageVariantType = 'success' | 'error' | 'warning' | 'info';

type StyledSnackbarProps = {
	variant?: FrodoMessageVariantType;
};

const StyledSnackbar = styled(Snackbar)<StyledSnackbarProps>(({ theme, variant }) => ({
	'& .FrodoMessage-content': {
		...(variant === 'success' && {
			backgroundColor: green[600],
			color: '#FFFFFF'
		}),

		...(variant === 'error' && {
			backgroundColor: theme.palette.error.dark,
			color: theme.palette.getContrastText(theme.palette.error.dark)
		}),

		...(variant === 'info' && {
			backgroundColor: blue[600],
			color: '#FFFFFF'
		}),

		...(variant === 'warning' && {
			backgroundColor: amber[600],
			color: '#FFFFFF'
		})
	}
}));

const variantIcon = {
	success: <CheckCircleOutlineIcon color="inherit" />,
	warning: <WarningAmberIcon color="inherit" />,
	error: <ErrorOutlineIcon color="inherit" />,
	info: <HelpOutlineIcon color="inherit" />
};

/**
 * FrodoMessage
 * The FrodoMessage component holds a snackbar that is capable of displaying message with 4 different variant. It uses the @mui/material React packages to create the components.
 */
function FrodoMessage() {
	const dispatch = useAppDispatch();
	const state = useAppSelector(selectFrodoMessageState);
	const options = useAppSelector(selectFrodoMessageOptions);

	return (
		<StyledSnackbar
			{...options}
			open={state}
			onClose={() => dispatch(hideMessage())}
		>
			<SnackbarContent
				className="FrodoMessage-content"
				message={
					<div className="flex items-center">
						{variantIcon[options.variant]}
						<Typography className="mx-8">{options.message}</Typography>
					</div>
				}
				action={[
					<IconButton
						key="close"
						aria-label="Close"
						color="inherit"
						onClick={() => dispatch(hideMessage())}
						size="large"
					>
						<HighlightOffIcon />
					</IconButton>
				]}
			/>
		</StyledSnackbar>
	);
}

export default memo(FrodoMessage);
