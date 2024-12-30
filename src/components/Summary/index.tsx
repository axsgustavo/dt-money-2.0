import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { Card, SummaryContainer } from "./styles";

// import logo from "../../assets/logo.svg";

export function Summary() {
  return (
    <SummaryContainer>
      <Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>R$ 17.400,00</strong>
      </Card>
      <Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>R$ 1.259,00</strong>
      </Card>
      <Card variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </header>

        <strong>R$ 16.141,00</strong>
      </Card>
    </SummaryContainer>
  );
}
