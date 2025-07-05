"use client";

import ShopButton, { ButtonStyle } from "@/components/shared/shop-button";
import { theme } from "@/components/shared/theme";
import styled from "styled-components";
import ResponsiveHeaderImage from "./responsive-header-image";

const StyledHeader = styled.header`
  background-color: #211c24;
  color: ${theme.colors.white};
  font-family: Inter;
  display: flex;
  align-items: center;
  justify-content: space-around;
  line-height: 1.25;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: ${theme.spacing["2xl"]};
    text-align: center;
    img {
      margin-top: 2rem;
    }
  }

  h1 {
    font-size: clamp(5rem, 7vw, 8.5rem);
    font-weight: 100;
    margin-bottom: ${theme.spacing.sm};
  }

  h2 {
    font-size: clamp(1.1rem, 1.3vw, 2rem);
  }

  p {
    font-size: clamp(1.1rem, 1.1vw, 1.3rem);
  }

  p,
  h2 {
    color: ${theme.colors.textSecondary};
    font-weight: 600;
  }

  strong {
    font-weight: 700;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <article>
        <h2>Pro.Beyond</h2>
        <h1>
          Iphone 14 <strong>Pro</strong>
        </h1>
        <p>Created to change everything for the better. For everyone</p>
        <ShopButton variant={ButtonStyle.light} />
      </article>

      <ResponsiveHeaderImage />
    </StyledHeader>
  );
}
