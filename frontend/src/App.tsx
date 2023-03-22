import { CssBaseline, Stack } from '@mui/material';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Stack direction="column" minWidth="100vw" minHeight="100vh" sx={{ backgroundColor: '#F0F0F0' }}>
        <Stack direction="row"></Stack>
      </Stack>
    </Fragment>
  );
}

export default App;
