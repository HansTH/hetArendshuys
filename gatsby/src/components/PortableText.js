import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

export default function PortableText({ blocks }) {
  return (
    <PortableTextStyles>
      <BlockContent blocks={blocks} />
    </PortableTextStyles>
  );
}

const PortableTextStyles = styled.div`
  p:not(:first-child):not(:last-child) {
    margin: 0.5rem 0;
  }
`;
