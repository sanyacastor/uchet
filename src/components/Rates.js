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

const Table = styled.table`
  border: none;
  width: 100%;
  padding-right: 10px;
  margin-bottom: 16px;

  .pl-10 {
    padding-left: 30px;
  }

  & td:nth-child(2) {
    text-align: right;
  }
`;

export default function Rates(props) {
  const { electricity, heating, gas, water_cold, water_hot } = props.data;
  return (
    <Wrapper>
      <Title>Тарифы</Title>
      <Table>
        <tbody>
          <tr>Электроенергия</tr>
          <tr>
            <td className="pl-10">Тариф 1(день)</td>
            <td>{electricity.t1} руб./кв*ч</td>
          </tr>
          <tr>
            <td className="pl-10">Тариф 2(ночь)</td>
            <td>{electricity.t2} руб./кв*ч</td>
          </tr>
          <tr>
            <td>Газ</td>
            <td>{gas} руб./ед.изм.</td>
          </tr>
          <tr>
            <td>Тепло</td>
            <td>{heating} руб./ед.изм.</td>
          </tr>
          <tr>
            <td>Вода хол.</td>
            <td>{water_cold} руб./ед.изм.</td>
          </tr>
          <tr>Вода гор.</tr>
          <tr>
            <td className="pl-10">Тариф 2(ночь)</td>
            <td>{water_hot.t1} руб./ед.изм.</td>
          </tr>
          <tr>
            <td className="pl-10">Тариф 2(ночь)</td>
            <td>{water_hot.t2} руб./ед.изм.</td>
          </tr>
        </tbody>
      </Table>
      <div className="button-wrapper">
        <Button caption="Перейти" bordered />
      </div>
    </Wrapper>
  );
}
