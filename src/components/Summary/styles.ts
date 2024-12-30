import styled, { css } from "styled-components";

export const SummaryContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: -5rem auto 0;
  padding: 0 1.5rem;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`;

interface CardProps {
  variant?: "green";
}

export const Card = styled.div<CardProps>`
  width: 100%;
  padding: 2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-600"]};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;

    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background-color: ${props.theme["green-700"]};
    `}
`;
