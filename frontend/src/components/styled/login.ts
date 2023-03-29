import { Box, BoxProps, styled } from '@mui/material';

export const LoginContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '100vw',
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F0F0F0',
}));

export const LoginHeader = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '23.75rem',
  height: '2.75rem',
  padding: '0 1.125rem 0 1.125rem',
  border: '0.0625rem solid #DEE2E6',
  borderRadius: '0.5rem 0.5rem 0 0',
  borderBottom: '0rem',
  backgroundColor: '#FFFFFF',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
