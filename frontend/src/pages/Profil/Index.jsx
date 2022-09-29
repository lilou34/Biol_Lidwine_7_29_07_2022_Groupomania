import React from 'react';
//import Header from '../../components/Header';
import styled from 'styled-components'
import Header from '../../components/Header';

const Profil = () => {
    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
    return (
        <Wrapper>
        <Header />
    <Title>
      Mon Profil
    </Title>
    
  </Wrapper>
    );
};

export default Profil;