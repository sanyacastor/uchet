import React from 'react';
import styled, { css } from 'styled-components';

import Button from './shared/Button';
import Chart from './Chart';

const Wrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 18px;
  padding-left: 20px;
  padding-right: 17px;
  background: var(--white-color);
  border-radius: 4px;
  margin-bottom: 25px;

  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 35px;
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

const Navigation = styled.div`
  display: flex;

  button {
    margin-left: 8px;
  }

  p {
    margin-right: auto;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;

  ${(props) =>
    props.bordered &&
    css`
      border-top: 1px solid #000;
      padding-top: 20px;
      padding-bottom: 20px;
    `}
`;

const NormsWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Norms = styled.div`
  width: 250px;
  border-right: 1px solid #000;
  padding-right: 20px;
`;

const Deviations = styled.div`
  padding-left: 15px;
`;

const DeivationItem = styled.p`
  margin: 0;
  text-align: right;
  padding-bottom: 8px;
`;

const StyledChart = styled.div``;

const Period = styled.div`
  width: 100%;
  text-align: right;
  color: #b9b9b9;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export default function Usage({ data }) {
  return (
    <Wrapper>
      <Navigation>
        <Title>Потребление</Title>
        <Button caption="год" bordered></Button>
        <Button caption="квартал" bordered></Button>
        <Button caption="неделя" bordered></Button>
      </Navigation>
      <Period> &lt; 1 авг - 8 авг &gt; </Period>
      <StyledChart>
        <Chart data={data} />
      </StyledChart>
      <Row bordered>
        Относительно предидушего периода <span>+12%/360руб.</span>
      </Row>
      <Title>Информация</Title>
      <Row>
        Кол-во подключенныйх объектов <span>2</span>
      </Row>
      <Row>
        Кол-во подключенных счетчиков
        <span>5</span>
      </Row>
      <NormsWrapper>
        <Norms>
          <Title>Нормы потребления</Title>
          <Row>
            Электроэнергия
            <span>00 ед.изм/нед.</span>
          </Row>
          <Row>
            Газ
            <span>00 ед.изм/нед.</span>
          </Row>
          <Row>
            Тепло
            <span>00 ед.изм/нед.</span>
          </Row>
          <Row>
            Вода хол.
            <span>00 ед.изм/нед.</span>
          </Row>
          <Row>
            Вода гор.
            <span>00 ед.изм/нед.</span>
          </Row>
        </Norms>
        <Deviations>
          <Title>Отклонения</Title>
          <DeivationItem>+5%</DeivationItem>
          <DeivationItem>+3%</DeivationItem>
          <DeivationItem>-9%</DeivationItem>
          <DeivationItem>+17%</DeivationItem>
          <DeivationItem>+4%</DeivationItem>
        </Deviations>
      </NormsWrapper>
      <div className="button-wrapper">
        <Button caption="Перейти" bordered />
      </div>
    </Wrapper>
  );
}
