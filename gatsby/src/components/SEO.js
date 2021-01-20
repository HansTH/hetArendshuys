import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function SEO({ children, title, image, keywords }) {
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
      <link rel='icon' type='image/svg+xml' href='/arendshuys-logo-small.svg' />
      <link rel='alternate icon' href='/favicon.ico' /> {/* fallback */}
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='114x114'
        href='/icon-114.png'
      />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap'
        rel='stylesheet'
      />
      {/* Meta Tags */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charSet='utf-8' />
      <meta name='description' content={site.siteMetadata.description} />
      <meta
        name='keywords'
        content={`${
          keywords && keywords.join(', ')
        }, Arendshuys, Cadeauartikelen, Woonaccessoires, Lifestyle, Klassiek met Stijl, Stijlvol Wonen, `}
      />
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
      <meta property='og:locale' content='nl-NL' key='oglocale' />
      <meta property='og:type' content='website' key='ogtype' />
      <meta
        property='og:url'
        content='https://www.hetarendshuys.nl'
        key='ogurl'
      />
      {children}
    </Helmet>
  );
}
