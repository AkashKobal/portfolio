import React from 'react'
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaGithub, FaTimes, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaLinkedin, FaAutoprefixer } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import _default from '../../themes/default';

// Styled Components
export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.card_light};
    backdrop-filter: blur(10px);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: 0.3s all ease;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    
    @media (max-width: 960px) {
        transition: 0.8s all ease;
        height: 70px;
    }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

export const Span = styled.div`
    padding: 0 8px;
    font-weight: bold;
    font-size: 22px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: inline-block;
`;

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    position: relative;
    padding: 8px 0;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.primary};
      transition: width 0.3s ease;
    }
    
    :hover {
      color: ${({ theme }) => theme.primary};
    }
    
    :hover::after {
      width: 100%;
    }

    &.active {
      color: ${({ theme }) => theme.primary};
    }
    
    &.active::after {
      width: 100%;
    }
`;

export const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1.8px solid ${({ theme }) => theme.primary};
  height: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  @media screen and (max-width: 768px) { 
    font-size: 14px;
    height: 36px;
    padding: 0 16px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.05);
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
    transition: all 0.3s ease;
    
    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    padding: 20px;
    background: ${({ theme }) => theme.card_light};
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20px)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
    border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 14px 20px;
  border-radius: 12px;
  
  :hover {
    color: ${({ theme }) => theme.primary};
    background: rgba(0, 0, 0, 0.05);
    transform: translateX(5px);
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const MobileMenuButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border: 1.8px solid ${({ theme }) => theme.primary};
  height: 45px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
  margin-top: 10px;
  
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
  }
`;

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Navigation items with icons
  const navItems = [
    { id: 1, name: 'About', icon: <FaUser />, href: '#about' },
    { id: 2, name: 'Skills', icon: <FaCode />, href: '#skills' },
    { id: 3, name: 'Experience', icon: <FaBriefcase />, href: '#experience' },
    { id: 4, name: 'Projects', icon: <FaCode />, href: '#projects' },
    { id: 5, name: 'Education', icon: <FaGraduationCap />, href: '#education' },
  ];

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
  <motion.a
    href="/"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      textDecoration: "none",
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaAutoprefixer size="3rem" color={_default.primary} />

    {/* Monogram A */}
    <Span style={{ fontSize: "26px", letterSpacing: "1px" }}>
      A<span style={{ fontWeight: 400, opacity: 0.8 }}>kash</span>
    </Span>
  </motion.a>
</NavLogo>


        <MobileIcon>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FaTimes onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <FaBars onClick={() => setIsOpen(!isOpen)} />
            )}
          </motion.div>
        </MobileIcon>

        <NavItems>
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink href={item.href}>
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </NavItems>

        <ButtonContainer style={{ gap: '10px', justifyContent: 'flex-end' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubButton href={Bio.github} target="_blank">
              <FaGithub />
              Github
            </GitHubButton>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubButton href={Bio.linkedin} target="_blank" style={{ borderColor: _default.secondary, color: _default.secondary }}>
              <FaLinkedin />
              LinkedIn
            </GitHubButton>
          </motion.div>
        </ButtonContainer>

        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileMenuItems>
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.id * 0.05 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MobileMenuLink href={item.href} onClick={() => setIsOpen(!isOpen)} >
                    {item.icon}
                    <span style={{ marginLeft: '12px' }}>{item.name}</span>
                  </MobileMenuLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MobileMenuButton href={Bio.github} target="_blank">
                  <FaGithub />
                  Github
                </MobileMenuButton>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.05 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MobileMenuButton href={Bio.linkedin} target="_blank" style={{ borderColor: _default.secondary, color: _default.secondary }}>
                  <FaLinkedin />
                  LinkedIn
                </MobileMenuButton>
              </motion.li>
            </MobileMenuItems>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;