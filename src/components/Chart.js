import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  width: 100%;
  height: 150px;
`;

const Chart = ({ data }) => (
  <ChartWrapper>
    {console.log(data.data)}
    <ResponsiveBar
      data={data.data}
      keys={data.keys}
      indexBy="day"
      margin={{ top: 20, right: 150, bottom: 30, left: 30 }}
      padding={0.5}
      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', '1.4']] }}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      gridYValues={[ 100, 500, 1000, 2000]}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickValues: [ 100, 500, 1000, 2000],
        tickSize: 0,
        tickPadding: 0,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -41,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </ChartWrapper>
);

export default Chart;
