import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouteList } from './routes/RouteList';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <RouteList />
      </React.Fragment>
    </QueryClientProvider>
  </React.StrictMode>
);
