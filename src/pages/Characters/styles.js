import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gradientBody[1]},
    ${({ theme }) => theme.colors.gradientBody[2]}
  );
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
 
  button {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.gradientBody[1]},
      ${({ theme }) => theme.colors.gradientBody[2]}
    );
    height: 50px;
    width: 100px;
    border: none;
    box-shadow: ${({ theme }) => theme.boxShadow};
    cursor: pointer;
    
    img {
      height: 100%;
      width: 100%;
    }
  }

  button:first-child {
    margin-right: 30px;
  }
`;

export const Card = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gradientBody[1]},
    ${({ theme }) => theme.colors.gradientBody[2]}
  );
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  img {
    max-width: 200px;
    max-height: 200px;
    margin-top: 10px;
  }
`;