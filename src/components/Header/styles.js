import styled from 'styled-components'

export const Container = styled.header`
  color: ${({ theme }) => theme.colors.text};
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    font-size: 74px;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;