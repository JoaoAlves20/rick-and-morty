import styled from "styled-components";

export default styled.button`
  height: 50px;
  width: 100px;
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  background: #0d0d0d;
  
  img {
    height: 100%;
    width: 100%;
  }
`;