import React from 'react';
import styled from 'styled-components';

import Wallet from '../components/Wallet';
import Rates from '../components/Rates';
import Usage from '../components/Usage';

const StyledDashborad = styled.div`
  width: 100%;
  height: calc(100vh - var(--header-height));
  /* padding-left: 50px; */
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Column = styled.div`
  min-width: 400px;
`;

const getRandomValue = (num) => Math.floor(Math.random() * num);

const walletdata = {
  balance: {
    current: '10000',
    debt: '1500',
  },
  sources: [
    {
      name: 'Электроэнергия',
      value: '1000',
    },
    {
      name: 'Газ',
      value: '200',
    },
    {
      name: 'Тепло',
      value: '100',
    },
    {
      name: 'Вода хол.',
      value: '0',
    },
    {
      name: 'Вода гор.',
      value: '20',
    },
  ],
};

const ratesdata = {
  electricity: {
    t1: '4',
    t2: '3',
  },
  gas: '0',
  heating: '0',
  water_cold: '0',
  water_hot: {
    t1: '4',
    t2: '3',
  },
};

const chartdata = {
  keys: ['hWater', 'cWater', 'heat', 'gas', 'electricity'],
  data: [
    {
      day: 'ПН',
      gas: 177,
      hWater: 162,
      cWater: 162,
      heat: getRandomValue(400),
      electricity: 69,
    },
    {
      day: 'ВТ',
      gas: 299,
      hWater: 20,
      cWater: 402,
      heat: getRandomValue(400),
      electricity: 109,
    },
    {
      day: 'СР',
      gas: 50,
      hWater: 20,
      cWater: 402,
      heat: getRandomValue(400),
      electricity: 109,
    },
    {
      day: 'ЧТ',
      gas: 50,
      hWater: 20,
      cWater: 402,
      heat: getRandomValue(400),
      electricity: 109,
    },
    {
      day: 'ПТ',
      gas: 50,
      hWater: 20,
      cWater: 402,
      heat: getRandomValue(400),
      electricity: 109,
    },
    {
      day: 'СБ',
      gas: 50,
      hWater: 20,
      cWater: 402,
      heat: getRandomValue(400),
      electricity: 109,
    },
    {
      day: 'ВС',
      gas: 50,
      hWater: 20,
      cWater: 402,
      heat: getRandomValue(400),
      electricity: 109,
    },
  ],
};

export default function Dashboard() {
  return (
    <StyledDashborad>
      <Column>
        <Wallet data={walletdata} />
        <Rates data={ratesdata} />
      </Column>
      <Column>
        <Usage data={chartdata}/>
      </Column>
    </StyledDashborad>
  );
}
