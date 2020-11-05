import React from 'react'
import headerImage from '../assets/images/header-image.jpg'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderStyles/>
  )
}

const HeaderStyles = styled.div`
  width: 100vw;
  height: 600px;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
`