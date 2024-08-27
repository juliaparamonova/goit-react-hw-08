import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from 'layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route index element={<Home />} /></Route>
   
   
      </Route>
    </Routes>
  );
};

export default App;
