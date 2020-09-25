import React from 'react';
import Layout from './components/Layout';
import Aside from './components/Aside';
import Dashboard from './components/Dashboard';

const links = [
  { url: '/objects', title: 'Объекты Счетчики' },
  { url: '/rate', title: 'Нормы Тарифы' },
  { url: '/useage', title: 'Потребление' },
  { url: '/analytics', title: 'Аналитика' },
  { url: '/wallet', title: 'Кошелек' },
];

function App() {
  return (
    <Layout>
      <Aside links={links} />
      <Dashboard />
    </Layout>
  );
}

export default App;
