import React from 'react';
import { Container, Box } from '@mui/material';
import SearchBar from './components/SearchBar.tsx';
import Sidebar from './components/Sidebar.tsx';
import DataTable from './components/DataTable.tsx';

const App: React.FC = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Container>
        <SearchBar />
        <DataTable />
      </Container>
    </Box>
  );
};

export default App;
