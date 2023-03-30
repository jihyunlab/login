import { Fragment } from 'react';
import { Box, Typography } from '@mui/material';
import { LoginContainer, LoginContent, LoginFooter, LoginHeader } from '../../components/styled/login';

/*
  fontSize: '0.875rem',
  fontWeight: 'bold',
*/

function Login() {
  return (
    <Fragment>
      <LoginContainer>
        <Box>로고</Box>
        <LoginHeader>
          <Typography>타이틀</Typography>
          <Box>한영변환</Box>
        </LoginHeader>
        <LoginContent>
          <Box>이메일</Box>
          <Box>비밀번호</Box>
          <Box>에러</Box>
        </LoginContent>
        <LoginFooter>버튼</LoginFooter>
      </LoginContainer>
    </Fragment>
  );
}

export default Login;
