import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Page = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
 
`;

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 15px;
`;

export default function Layout({ children }) {
  return (
    <Page>
      <Header />
      <Content>{children}</Content>
    </Page>
  );
}
