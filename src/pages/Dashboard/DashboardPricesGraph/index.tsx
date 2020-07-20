import React from 'react';
import Chart from 'react-apexcharts';
import ApexChart from 'apexcharts';

import { Container, Header, Title, Content } from './styles';

import helpImg from '../../../assets/icons/help.svg';

const DashboardPricesGraph: React.FC = () => {
  const options: ApexChart.ApexOptions = {
    colors: ['#1070ca', '#ec4c47', '#f7d154'],
    labels: ['Na média', 'Acima da média', 'Abaixo da média'],
    legend: {
      itemMargin: {
        vertical: 8,
      },
      formatter: (v, o) => {
        const percentage = `${o.w.config.series[o.seriesIndex]}%`;
        return `${v} <span class="percentageChart">${percentage}</span>`;
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        formatter: value => {
          return `${value}%`;
        },
      },
    },
  };

  const series = [60, 25, 15];
  return (
    <Container>
      <Header>
        <Title>Preços - Dryve x KBB</Title>
        <img src={helpImg} alt="Ajuda" />
      </Header>
      <Content>
        <Chart
          options={options}
          series={series}
          type="donut"
          height="100%"
          width="100%"
        />
      </Content>
    </Container>
  );
};

export default DashboardPricesGraph;
