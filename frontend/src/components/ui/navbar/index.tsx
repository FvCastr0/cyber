"use client";

import { theme } from "@/components/shared/theme";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCloseSharp, IoPersonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";

const NavStyled = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: ${theme.spacing.lg};
  justify-content: space-evenly;
  backdrop-filter: blur(8px);
  box-shadow: ${theme.shadows.md};

  @media (max-width: 860px) {
    justify-content: space-between;
  }

  #menu {
    display: none;
    font-size: 2rem;
    cursor: pointer;

    @media (max-width: 860px) {
      display: block;
    }
  }
`;

const SearchButton = styled.div`
  display: flex;

  @media (max-width: 860px) {
    display: none;
  }

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

const NavLinks = styled(motion.div)<{ isOpen: boolean }>`
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

  @media (max-width: 860px) {
    display: none;
    @media (max-width: 860px) {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: 96px;
      right: 22px;
      background: ${theme.colors.background};
      padding: ${theme.spacing.lg};
      border-radius: ${theme.radii.md};
      box-shadow: ${theme.shadows.md};
      gap: ${theme.spacing.md};
      z-index: 10;
      transition: all ease-in 0.3s;

      a {
        font-family: Inter;
        color: ${theme.colors.textSecondary};
        text-decoration: none;

        &:hover {
          color: ${theme.colors.black};
          text-decoration: underline;
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
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (window.screen.width > 860) setIsOpen(true);
  }, []);

  return (
    <NavStyled>
      <Image src={"/images/logo.png"} alt="logo" width={96} height={29} />

      {!isOpen ? (
        <RxHamburgerMenu onClick={toggleMenu} id="menu" />
      ) : (
        <IoCloseSharp onClick={toggleMenu} id="menu" />
      )}

      <SearchButton>
        <label htmlFor="search">
          <CiSearch size={28} />
        </label>
        <input type="search" id="search" placeholder="Search" />
      </SearchButton>
      <AnimatePresence>
        {isOpen && (
          <NavLinks
            key="navLinks"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1, ease: "easeIn" }}
            isOpen={isOpen}
          >
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
          </NavLinks>
        )}
      </AnimatePresence>
    </NavStyled>
  );
}
