import styled, { css } from "styled-components";

export const ContainerLink = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    display: flex;
    align-items: center;
    width: 120px;
    justify-content: center;
    cursor: pointer;

    a {
      text-decoration: none;
      color: ${theme.colors.text};
      font-weight: bold;
    }
  `}
`;

export const ContainerCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: ${theme.colors.text};
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14rem;
    box-shadow: ${theme.boxShadow};
    padding: 10px;
    padding-bottom: 30px;
    border-radius: 120px;

    img {
      max-width: 200px;
      max-height: 200px;
      margin-top: 10px;
      border-radius: 50%;
    }

    .Alive {
      border: 5px solid ${theme.colors.status.alive};
    }

    .Dead {
      border: 5px solid ${theme.colors.status.dead};
    }

    .unknown {
      border: 5px solid ${theme.colors.status.unknown};
    }
  `}
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;

  button:first-child {
    margin-right: 30px;
  }

  padding-bottom: 24px;
`;