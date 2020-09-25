import React from 'react';
import styled from 'styled-components';
import Button from '../components/shared/Button';

const StyledHeader = styled.div`
  width: 100%;
  height: var(--header-height);
  background: var(--main-color);
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: var(--white-color);
`;

const StyledLogo = styled.div`
  width: 25px;
  height: 25px;
  background: var(--white-color);
  margin-right: 60px;
`;

const StyledNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default function Header({ userName }) {
  return (
    <StyledHeader>
      <StyledLogo />
      <StyledNavigation>
        <Button caption="личный кабинет" primary />
        <div>
          <Button caption={userName || 'user Name'} />
          <Button caption="выйти" />
        </div>
      </StyledNavigation>
    </StyledHeader>
  );
}
