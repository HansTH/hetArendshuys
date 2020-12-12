import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import ContactMap from '../components/ContactMap';
import SectionTitle from '../components/SectionTitle';
import { breakpoint } from '../styles/breakpoints';

export default function contact() {
	return (
		<ContactStyles>
			<SectionTitle title='Contact'>
				<div className='contact-container'>
					<div className='contact'>
						<Contact />
					</div>
					<div className='map'>
						<ContactMap />
					</div>
				</div>
			</SectionTitle>
		</ContactStyles>
	);
}

const ContactStyles = styled.div`
	margin: 100px 0;

	.contact-container {
		display: flex;
		align-items: flex-start;
	}
	.contact {
		width: 50%;
		height: 100%;
		margin-right: 0.5rem;
	}
	.map {
		width: 50%;
		height: 100%;

		margin-left: 0.5rem;
	}

	@media ${breakpoint.sm} {
		.contact-container {
			flex-direction: column;
		}
		.contact {
			width: 100%;
			margin-bottom: 2rem;
			margin-right: 0;
		}

		.map {
			width: 100%;
			margin-left: 0;
		}
	}
`;
