import React from 'react';
import styled from 'styled-components';

import Button from '../components/shared/Button';

const Wrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 18px;
  padding-left: 10px;
  padding-right: 10px;
  background: var(--white-color);
  border-radius: 4px;
  margin-bottom: 25px;

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
  }
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: bold;
  color: var(--main-color);
  text-transform: uppercase;
  padding-bottom: 8px;
`;

const Balance = styled.div`
  min-height: 32px;
  background: var(--secondary-color);
  color: var(--main-color);
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 4px;
  & span {
    margin-left: auto;
  }
`;

const Debt = styled.div`
  margin: 0 10px;
  min-height: 32px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  & span {
    margin-left: auto;
  }
`;

const Table = styled.table`
  border: none;
  width: 100%;
  padding-left: 30px;
  padding-right: 10px;
  margin-bottom: 16px;
  & td:nth-child(2) {
    text-align: right;
  }
`;

export default function Wallet(data) {
  const { sources, balance } = data.data;

  return (
    <Wrapper>
      <Title>Кошелек</Title>
      <Balance>
        Баланс <span>{balance.current} руб.</span>
      </Balance>
      <Debt>
        Задолженость <span>{balance.debt} руб.</span>
      </Debt>
      <Table>
        <tbody>
          {sources.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.value} руб.</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="button-wrapper">
        <Button caption="Перейти" bordered />
      </div>
    </Wrapper>
  );
}
