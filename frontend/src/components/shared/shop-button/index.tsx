import styled from "styled-components";
import { theme } from "../theme";

export enum ButtonStyle {
  light = "light",
  dark = "dark"
}

const StyledShopButton = styled.button<{ $variant: ButtonStyle }>`
  background-color: transparent;
  color: ${props =>
    props.$variant === ButtonStyle.light
      ? theme.colors.white
      : theme.colors.black};
  font-family: Poppins, sans-serif;
  border: 1px solid
    ${props =>
      props.$variant === ButtonStyle.light
        ? theme.colors.white
        : theme.colors.black};
  font-size: 1.1rem;
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  border-radius: ${theme.radii.md};
  cursor: pointer;
  margin-top: ${theme.spacing.xl};
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: ${props =>
      props.$variant === ButtonStyle.light
        ? theme.colors.white
        : theme.colors.black};
    color: ${props =>
      props.$variant === ButtonStyle.light
        ? theme.colors.black
        : theme.colors.white};
  }
`;
export default function ShopButton({ variant }: { variant: ButtonStyle }) {
  return <StyledShopButton $variant={variant}>Shop Now</StyledShopButton>;
}
