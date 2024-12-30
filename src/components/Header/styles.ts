import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["green-500"]};

  color: ${(props) => props.theme.white};
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;
