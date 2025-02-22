import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii[2]}px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;