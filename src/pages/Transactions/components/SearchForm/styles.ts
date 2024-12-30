import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;

    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme["gray-900"]};

    color: ${(props) => props.theme["gray-300"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    padding: 1rem 1.5rem;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["green-300"]};

    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;

    &:hover {
      background-color: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
    }
  }
`;
