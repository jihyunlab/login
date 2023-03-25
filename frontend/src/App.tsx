import { Fragment } from 'react';
import { Button, CssBaseline } from '@mui/material';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Button
        variant="contained"
        sx={{
          fontFamily: 'WebNanumSquareNeo',
          fontSize: '12px',
          mt: '10px',
          ml: '10px',
          width: '160px',
          backgroundColor: 'primary.main',
        }}
      >
        지현랩
      </Button>
    </Fragment>
  );
}

export default App;
