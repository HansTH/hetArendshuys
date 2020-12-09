import React from 'react';
import styled from 'styled-components';

export default function StoreHours({ storeHours }) {
	return (
		<StoreHoursStyles>
			<thead>
				<tr>
					<th>Openingstijden</th>
				</tr>
			</thead>
			<tbody>
				{storeHours.map((item, index) => (
					<tr key={index}>
						<td>{item.day}</td>
						{item.closed ? (
							<td>Gesloten</td>
						) : (
							<td>{`${item.openingHour} - ${item.closeHour} uur`}</td>
						)}
					</tr>
				))}
			</tbody>
		</StoreHoursStyles>
	);
}

const StoreHoursStyles = styled.table`
	color: var(--light-yellow);
	padding: 0.5rem;
	font-size: 1.1rem;

	th {
		font-weight: 500;
		padding-bottom: 0.5rem;
		text-align: left;
		color: var(--yellow);
	}
	td {
		padding: 0.2rem 0;
		font-weight: 300;
	}
`;
