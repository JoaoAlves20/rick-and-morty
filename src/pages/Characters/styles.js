import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.text};

  .Dead {
    background: ${({ theme }) => theme.colors.status.dead};
  }

  .Alive {
    background: ${({ theme }) => theme.colors.status.alive};
  }

  .unknown {
    background: ${({ theme }) => theme.colors.status.unknown};
  }
`;

export const Card = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 14rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 10px;
  padding-bottom: 30px;
  border-radius: 120px;

  img {
    max-width: 200px;
    max-height: 200px;
    margin-top: 10px;
    border-radius: 50%;
  }
`;