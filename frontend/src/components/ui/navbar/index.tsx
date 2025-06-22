"use client";

import { theme } from "@/components/shared/theme";
import Image from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import styled from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  margin: ${theme.spacing.lg};
  justify-content: space-evenly;

  ul {
    display: flex;
    gap: ${theme.spacing.lg};
    align-items: center;

    a {
      font-family: Inter;
      color: ${theme.colors.textSecondary};
      text-decoration: none;
      transition: 0.3s all ease-in;

      &:hover {
        color: ${theme.colors.black};
        text-decoration: underline;
      }
      &:first-child {
        color: ${theme.colors.black};
      }
    }

    div {
      display: flex;
      gap: ${theme.spacing.md};
      a {
        color: ${theme.colors.black};
      }
    }
  }
`;

const SearchButton = styled.div`
  display: flex;

  input {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    background-color: ${theme.colors.backgroundMuted};
    border: 1px solid ${theme.colors.backgroundMuted};
    border-radius: ${theme.radii.md};
    box-shadow: ${theme.shadows.md};
    font-family: Inter;
    outline: none;
    padding-left: ${theme.spacing["2xl"]};
  }

  label {
    display: flex;
    align-items: center;
    color: ${theme.colors.textSecondary};
    transform: translateX(135%);
  }
`;

export default function Navbar() {
  return (
    <NavStyled>
      <Image src={"/images/logo.png"} alt="logo" width={96} height={29} />

      <SearchButton>
        <label htmlFor="search">
          <CiSearch size={28} />
        </label>
        <input type="search" id="search" placeholder="Search" />
      </SearchButton>

      <ul>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact us</Link>

        <div>
          <Link href={"/"}>
            <CiHeart size={24} />
          </Link>
          <Link href={"/"}>
            <BsCart2 size={24} />
          </Link>
          <Link href={"/"}>
            <IoPersonOutline size={24} />
          </Link>
        </div>
      </ul>
    </NavStyled>
  );
}
