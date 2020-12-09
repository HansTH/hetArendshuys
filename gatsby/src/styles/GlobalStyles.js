import { createGlobalStyle } from 'styled-components';
import { breakpoint } from './breakpoints';

const GlobalStyles = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    --blue: #01315F;
    --yellow: #F8BA0F;
    --light-yellow: #FFE7B9;
    --white: #FCF7EF;
  }

  html{
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
    color: var(--blue);
    scroll-behavior:smooth;
    background-color: var(--light-yellow)
  }

  h1{
    font-size: 3rem;
  }

  h2{
    font-size: 2.5rem;
  }

  h3{
    font-size: 1.6rem;
    font-weight: 400;
  }

  h5 {
			font-style: italic;
			font-weight: 200;
			margin-bottom: 0.5rem;
		}

  p{
    font-size: 1.2rem;
    font-weight:300;
    line-height: 1.2
  }

  ul{
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  .container{
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .gatsby-image-wrapper {

      img {
        border-radius: 10px;
		    border: 3px solid var(--yellow);
			}

		}

  @media ${breakpoint.lg} {
    .gatsby-image-wrapper {
			width: 175px !important;
			height: 175px !important;
		}
  }

  @media ${breakpoint.md} {
		.gatsby-image-wrapper {
			width: 250px !important;
			height: 250px !important;
		}
  }

  @media ${breakpoint.sm} {
    .gatsby-image-wrapper {
			width: 250px !important;
			height: 250px !important;

		}

    h2{
      font-size: 2rem;
    }
    
    h3{
      text-align: center;
      margin-bottom: 1rem;

    }

    p{
      font-size: 1rem;
    }
	}

  @media ${breakpoint.xs} {
    .gatsby-image-wrapper {
			width: 200px !important;
			height: 200px !important;
		}

    h3{
      font-size: 1.25rem;
    }
  }
`;

export default GlobalStyles;
