import React from 'react';
import styled from 'styled-components';

export default function ContactMap() {
	return (
		<ContactMapStyles>
			<label className='maps-label' htmlFor='maps'>
				Route
			</label>
			<div id='maps'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.948304560504!2d6.709425516499034!3d52.262483779766264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b80e9941815555%3A0x7d19c9f8278e4b70!2sHet%20Arendshuys!5e0!3m2!1sen!2snl!4v1607769413345!5m2!1sen!2snl'
					width='100%'
					height='405px'
					ariaHidden='false'
					title='maps'
				/>
			</div>
		</ContactMapStyles>
	);
}

const ContactMapStyles = styled.div`
	label {
		display: inline-block;
		margin: 0.5rem 0 0.25rem;
	}

	iframe {
		border: 2px solid var(--yellow);
		border-radius: 6px;
	}
`;
