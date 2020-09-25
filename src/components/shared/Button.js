import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background: var(--main-color);
  color: var(--white-color);

  ${(props) =>
    props.primary &&
    css`
      text-transform: uppercase;
      background: var(--white-color);
      color: var(--main-color);
      border-radius: 2px;
      font-weight: bold;
    `}

  ${(props) =>
    props.bordered &&
    css`
      text-transform: uppercase;
      background: var(--white-color);
      color: var(--main-color);
      border: 1px solid var(--main-color);
      border-radius: 2px;
      font-weight: bold;
    `}
`;

export default function Button({ caption, action, primary, bordered }) {
  return (
    <StyledButton onClick={action} primary={primary} bordered={bordered}>
      {caption}
    </StyledButton>
  );
}
