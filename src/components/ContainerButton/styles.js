import styled from 'styled-components'

export const ButtonStyles = styled.button`
  background: ${({ theme }) => theme.colors.primaryColors[4]};
  height: 50px;
  width: 100px;
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  
  img {
    height: 100%;
    width: 100%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;

  button:first-child {
    margin-right: 30px;
  }

  padding-bottom: 24px;
`;