import styled from '@emotion/styled';


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[4]}px;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  text-align: center;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[3]}px;
  margin-top: ${({ theme }) => theme.space[4]}px;
  text-align: center;
`;