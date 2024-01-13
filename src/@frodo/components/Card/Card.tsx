import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function FrodoCard({ name, total }: { name: string; total: string }) {
	return (
		<Card className="bg-white text-gray-900">
			<CardContent>
				<Typography color="grey">{name}</Typography>
				<Typography
					variant="h5"
					component="div"
					color="black"
				>
					{total}
				</Typography>
			</CardContent>
		</Card>
	);
}
