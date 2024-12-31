import { Content, HeaderContainer, NewTransactionButton } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";

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

          <NewTransactionModal />
        </Dialog.Root>
      </Content>
    </HeaderContainer>
  );
}
