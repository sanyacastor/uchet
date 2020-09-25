import React from 'react';
import styled from 'styled-components';

const StyledAside = styled.div`
  width: 213px;
  height: calc(100vh - var(--header-height));
  padding-top: 40px;
  padding-right: 15px;
`;

const StyledLink = styled.div`
  width: 127px;
  border-left: 8px solid var(--main-color);
  min-height: 70px;
  display: flex;
  margin-bottom: 16px;
  padding-left: 16px;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--main-color);
  font-weight: bold;
  align-items: center;
  background: var(--white-color);
  cursor: pointer;
`;

export default function Aside({ links }) {
  return (
    <StyledAside>
      {links.map((link, i) => (
        <StyledLink key={i}>{link.title}</StyledLink>
      ))}
    </StyledAside>
  );
}
