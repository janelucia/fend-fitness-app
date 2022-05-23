import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './styles/global.css';
import App from './Routes/App';
import Browse from './Routes/Browse';
import Profile from './Routes/Profile';
import Program from './Routes/Program';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl3hjul2o651p01zd4s1d2qsx/master',
  cache: new InMemoryCache(),
});

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="browse" element={<Browse />} />
          <Route path="profile" element={<Profile />} />
          <Route path="browse/program/:id" element={<Program />} />
        </Routes>
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>
);
