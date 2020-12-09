import React from 'react';
import styled from 'styled-components';

export default function StoreContact({ contact }) {
	const { address, zipcode, city, telefoonNumber, email } = contact.contactInfo;
	return (
		<ContactInfoStyles>
			<thead>
				<tr>
					<th>Adres gegevens</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{`${contact.storeName} - ${contact.slogan}`}</td>
				</tr>
				<tr>
					<td>{address}</td>
				</tr>
				<tr>
					<td>{`${zipcode} ${city}`}</td>
				</tr>
				<tr>
					<td>{telefoonNumber}</td>
				</tr>
				<tr>
					<td>{email}</td>
				</tr>
			</tbody>
		</ContactInfoStyles>
	);
}

const ContactInfoStyles = styled.table`
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
