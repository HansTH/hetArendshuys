/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
	path: `.env`,
});

module.exports = {
	siteMetadata: {
		title: `het Aredenshuys | Klassiek met Stijl`,
		name: `het Arendshuys`,
		siteUrl: `https://www.hetarendshuys.nl`,
		description: `Bij Het Arendshuys, de sfeervolle winkel met mooie cadeauartikelen in Delden kun je terecht voor een ruim assortiment aan cadeau, artikelen, serviezen en woonaccessoires. Deze gezellige winkel is goed gevuld en de collectie varieert van en leuke cadeau verpakkingen. Wie op zoek is naar een cadeau moet zich zeker eens laten inspireren door het assortiment van cadeauartikelen bij Het Arendshuys. Mocht je op zoek zijn naar een specifiek artikelen dan kun je altijd het personeel van Het Arendshuys om hulp vragen. Zij weten je goed te adviseren en te assisteren. Voor dit brede assortiment aan cadeau artikelen en accessoires van Het Arendshuys moet je aan Langestraat 42 In Delden zijn.`,
	},

	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-sanity`,
			options: {
				// API sanity settings
				projectId: process.env.PROJECT_ID,
				dataset: `production`,
				watchMode: true,
				// a token with read permissions is required
				// if you have a private dataset
				token: process.env.SANITY_TOKEN,

				// If the Sanity GraphQL API was deployed using `--tag <name>`,
				// use `graphqlTag` to specify the tag name. Defaults to `default`.
				graphqlTag: 'default',
			},
		},
	],
};
