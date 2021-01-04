import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function SEO({ children, title, image }) {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					name
				}
			}
		}
	`);

	return (
		<Helmet titleTemplate={`%s • ${site.siteMetadata.name}`}>
			<html lang='nl' />
			<title>{title || site.siteMetadata.title}</title>
			{/* Fav Icons */}
			<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
			<link rel='alternate icon' href='/favicon.ico' /> {/* fallback */}
			<link rel='preconnect' href='https://fonts.gstatic.com' />
			<link
				href='https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap'
				rel='stylesheet'
			/>
			{/* Meta Tags */}
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta charSet='utf-8' />
			<meta name='description' content={site.siteMetadata.description} />
			{/* Open Graph */}
			<meta property='og:image' content={image || '/logo.svg'} />
			<meta
				property='og:title'
				content={title || site.siteMetadata.title}
				key='ogtitle'
			/>
			<meta
				property='og:site_name'
				content={site.siteMetadata.title}
				key='ogsitename'
			/>
			<meta
				property='og:description'
				content={site.siteMetadata.description}
				key='ogdescription'
			/>
			{children}
		</Helmet>
	);
}
