import styled from 'styled-components';

const SocialLinkStyles = styled.svg`
	width: 40px;
	&:hover {
		path {
			fill: var(--yellow);
		}

		rect {
			fill: var(--yellow);
			stroke: var(--light-red);
		}
	}
`;

export default SocialLinkStyles;
