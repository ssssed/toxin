import { Container } from '@/shared/ui/container';
import { DatePicker } from '@/shared/ui/datepicker';
import { Label } from '@/shared/ui/label';

export const DateOfArrival = () => {
	return (
		<Container
			direction='column'
			gap={5}
		>
			<Label>даты пребывания в отеле</Label>
			<DatePicker className='date-picker_full' />
		</Container>
	);
};
