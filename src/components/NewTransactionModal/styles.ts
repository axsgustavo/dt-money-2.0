import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    gap: 1rem;
    flex-direction: column;

    input {
      border: 0;
      border-radius: 6px;
      background-color: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      margin-top: 1rem;
      padding: 0 1.25rem;

      border: 0;
      border-radius: 6px;
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;

      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  background-color: transparent;
  line-height: 0;
  border: 0;
  cursor: pointer;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  color: ${(props) => props.theme["gray-500"]};
`;
