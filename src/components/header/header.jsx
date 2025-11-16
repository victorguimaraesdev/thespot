import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #ed3058;
  border-bottom: 1px solid #a50000;
  overflow: hidden;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #0B3F64;
  }
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #ed3058;
  border: none;
  width: 130px;
  height: 50px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: #ed3058;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  transition: all 0.3s ease;
  z-index: 99;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};

  a {
    color: #ffffff;
    font-size: 18px;
    text-decoration: none;
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Container>
        <Logo src="assets/logo.jpg" alt="Logo" />
        <Nav>
          <NavLink href="#">Sobre</NavLink>
          <NavLink href="#">Vantagens</NavLink>
          <NavLink href="#">Segurança</NavLink>
          <NavLink href="#">Localização</NavLink>
          <NavLink href="#">Contato</NavLink>
        </Nav>
        <Button>Fale Conosco</Button>

        <MenuButton onClick={toggleMenu}>
          <span />
          <span />
          <span />
          <span />
        </MenuButton>
      </Container>

      <MobileMenu isOpen={isOpen}>
        <NavLink href="#">Sobre</NavLink>
        <NavLink href="#">Vantagens</NavLink>
        <NavLink href="#">Segurança</NavLink>
        <NavLink href="#">Localização</NavLink>
        <NavLink href="#">Contato</NavLink>
        <Button>Fale Conosco</Button>
      </MobileMenu>
    </>
  );
};
