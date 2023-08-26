import { Filter } from '@/features/filter'
import { Rooms } from '@/features/rooms'

import { Container } from '@/shared/ui/container'

export const FilteredRooms = () => {
	return (
		<Container direction='row' gap={60} maxWidth={1160} center>
			<Filter />
			<Rooms />
		</Container>
	)
}
