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

  const closeMenu = () => setIsOpen(false);

  const redirect = () => {
    window.location.href =
      "https://www.instagram.com/residencialthespot?igsh=MXZya2tnOTdzM2xzMA%3D%3D";
  };

  return (
    <>
      <Container>
        <Logo src="assets/logo.jpg" alt="Logo" />
        <Nav>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#vantagem">Vantagens</NavLink>
          <NavLink href="#seguranca">Segurança</NavLink>
          <NavLink href="#lazer">Lazer</NavLink>
          <NavLink href="#gourmet">Gourmet</NavLink>
          <NavLink href="#localizacao">Localização</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </Nav>
        <Button onClick={redirect}>Fale Conosco</Button>

        <MenuButton onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </MenuButton>
      </Container>

      {/* MENU MOBILE */}
      <MobileMenu isOpen={isOpen}>
        <NavLink href="#about" onClick={closeMenu}>Sobre</NavLink>
        <NavLink href="#vantagem" onClick={closeMenu}>Vantagens</NavLink>
        <NavLink href="#seguranca" onClick={closeMenu}>Segurança</NavLink>
        <NavLink href="#lazer" onClick={closeMenu}>Lazer</NavLink>
        <NavLink href="#gourmet" onClick={closeMenu}>Gourmet</NavLink>
        <NavLink href="#localizacao" onClick={closeMenu}>Localização</NavLink>
        <NavLink href="#contato" onClick={closeMenu}>Contato</NavLink>

        <Button >Fale Conosco</Button>
      </MobileMenu>
    </>
  );
};
