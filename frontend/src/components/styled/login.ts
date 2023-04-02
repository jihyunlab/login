import { Box, BoxProps, styled } from '@mui/material';

export const LoginContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '100%',
  minHeight: '100%',
  padding: '0 1.5rem 3.25rem 1.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F0F0F0',
}));

export const LoginHeader = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '25rem',
  height: '2.75rem',
  padding: '0 1.125rem 0 1.125rem',
  border: '0.0625rem solid #DEE2E6',
  borderRadius: '0.5rem 0.5rem 0 0',
  borderBottom: '0rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#FFFFFF',
}));

export const LoginContent = styled(Box)<BoxProps>((props) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  width: '100%',
  maxWidth: '25rem',
  rowGap: props.theme.spacing(1),
  padding: '0.75rem 1.125rem 0.75rem 1.125rem',
  border: '0.0625rem solid #DEE2E6',
  borderRadius: '0 0 0 0',
  backgroundColor: '#FFFFFF',
}));

export const LoginFooter = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '25rem',
  height: '2.75rem',
  padding: '0 1.125rem 0 1.125rem',
  border: '0.0625rem solid #DEE2E6',
  borderRadius: '0 0 0.5rem 0.5rem',
  borderTop: '0rem',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: '#FFFFFF',
}));
