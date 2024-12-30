import { Content, HeaderContainer, NewTransactionButton } from "./styles";

import * as Dialog from "@radix-ui/react-dialog";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton type="button">
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Close>X</Dialog.Close>
              <Dialog.Title>Nova transação</Dialog.Title>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Content>
    </HeaderContainer>
  );
}
