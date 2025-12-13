import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation'
import HeroImg from '../../images/HeroImage.jpg'
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';
import {
    Github, Linkedin, Twitter, Instagram, Facebook, Mail, ExternalLink,
    Code, Braces, Terminal, GitBranch, Database, Palette, Sparkles, Zap,
    Cpu, Layers, Smartphone, Globe, Cloud, Lightbulb, Rocket,
    ChevronDown
} from 'lucide-react';
import styled from "styled-components";

// Main container for both sections with shared background
const MainContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.card_light};
`;

// Shared background animation
const SharedBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 80px 30px;
    min-height: 100vh;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    z-index: 1;
    
    @media (max-width: 960px) {
        padding: 60px 16px;
        clip-path: none;
    }
    @media (max-width: 640) {
        padding: 40px 16px;
    }
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    gap: 60px;
    
    
    @media (max-width: 960px) {
        flex-direction: column;
        text-align: center;
        gap: 40px;
    }
`;

const LeftContent = styled(motion.div)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    @media (max-width: 960px) {
        align-items: center;
    }
`;

const RightContent = styled(motion.div)`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Greeting = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    font-size: 1.2rem;
`;

const Title = styled(motion.h1)`
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 800;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.1;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 80px;
        height: 5px;
        background: ${({ theme }) => theme.primary};
        border-radius: 5px;
        
        @media (max-width: 960px) {
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const Subtitle = styled(motion.div)`
    font-size: clamp(1rem, 3vw, 1.4rem);
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 30px;
    max-width: 600px;
    line-height: 1.6;
`;

const RolesContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 40px;
    
    @media (max-width: 960px) {
        justify-content: center;
    }
`;

const RoleTag = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%);
    border: 1px solid rgba(0,0,0,0.08);
    padding: 10px 18px;
    border-radius: 50px;
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    font-size: 1rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
`;

const CTAContainer = styled(motion.div)`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
    
    @media (max-width: 960px) {
        justify-content: center;
    }
`;

const CTAButton = styled(motion.a)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.2);
        transition: left 0.5s ease;
        z-index: 0;
    }
    
    &:hover::before {
        left: 100%;
    }
    
    span {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;

const PrimaryButton = styled(CTAButton)`
    background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
    color: white;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
`;

const SecondaryButton = styled(CTAButton)`
    background: transparent;
    color: ${({ theme }) => theme.text_primary};
    border: 2px solid ${({ theme }) => theme.primary};
`;

const SocialMediaContainer = styled(motion.div)`
    display: flex;
    gap: 15px;
    
    @media (max-width: 960px) {
        justify-content: center;
    }
`;

const SocialIcon = styled(motion.a)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0,0,0,0.05);
    color: ${({ theme }) => theme.text_primary};
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.primary};
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.3s ease;
    }
    
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: white;
        transform: translateY(-5px);
        
        &::after {
            opacity: 1;
            transform: scale(1.1);
        }
    }
`;

const ProfileWrapper = styled(motion.div)`
    position: relative;
    width: 400px;
    height: 400px;
    
    @media (max-width: 640px) {
        width: 300px;
        height: 300px;
    }
`;

const ProfileImage = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid ${({ theme }) => theme.primary};
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    z-index: 2;
`;

const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const SkillOrbit = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    
    @media (max-width: 640px) {
        width: 350px;
        height: 350px;
    }
`;

const SkillIcon = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 50%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.card_light};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    transform: translateX(-50%);
    color: ${({ theme }) => theme.primary};
    
    @media (max-width: 640px) {
        width: 45px;
        height: 45px;
    }
`;

const FloatingIcon = styled(motion.div)`
    position: absolute;
    color: ${({ theme }) => theme.primary};
    opacity: 0.1;
    z-index: 0;
`;

const ScrollIndicator = styled(motion.div)`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.text_secondary};
    cursor: pointer;
    
    @media (max-width: 960px) {
        display: none;
    }
`;

const HeroSection = () => {
    // Social media links with icons
    // const socialMedia = [
    //     { icon: <Github size={20} />, url: Bio.github },
    //     { icon: <Linkedin size={20} />, url: Bio.linkedin },
    //     { icon: <Twitter size={20} />, url: Bio.twitter },
    //     { icon: <Instagram size={20} />, url: Bio.insta },
    //     { icon: <Facebook size={20} />, url: Bio.facebook },
    //     { icon: <Mail size={20} />, url: `mailto:${Bio.email}` },
    // ];

    // Floating tech icons
    const floatingIcons = [
        { icon: <Code size={40} />, top: "10%", left: "5%", delay: 0 },
        { icon: <Braces size={40} />, top: "20%", left: "90%", delay: 0.5 },
        { icon: <Terminal size={40} />, top: "70%", left: "10%", delay: 1 },
        { icon: <GitBranch size={40} />, top: "60%", left: "85%", delay: 1.5 },
        { icon: <Database size={40} />, top: "40%", left: "5%", delay: 2 },
        { icon: <Palette size={40} />, top: "80%", left: "75%", delay: 2.5 },
    ];

    // Skill icons for orbit
    const skillIcons = [
        { icon: <Cpu size={24} />, angle: 0 },
        { icon: <Layers size={24} />, angle: 45 },
        { icon: <Smartphone size={24} />, angle: 90 },
        { icon: <Globe size={24} />, angle: 135 },
        { icon: <Cloud size={24} />, angle: 180 },
        { icon: <Lightbulb size={24} />, angle: 225 },
        { icon: <Rocket size={24} />, angle: 270 },
        { icon: <Zap size={24} />, angle: 315 },
    ];

    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <MainContainer>
            <SharedBg>
                <HeroBgAnimation />
            </SharedBg>

            {/* Floating tech icons */}
            {floatingIcons.map((icon, index) => (
                <FloatingIcon
                    key={index}
                    style={{
                        top: icon.top,
                        left: icon.left,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 15, 0, -15, 0],
                    }}
                    transition={{
                        duration: 8,
                        delay: icon.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {icon.icon}
                </FloatingIcon>
            ))}

            {/* Hero Section */}
            <div id="about">
                <HeroContainer>
                    <HeroContent>
                        <LeftContent
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Greeting
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <Sparkles size={20} />
                                Hello, I'm
                            </Greeting>

                            <Title
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                {Bio.name}
                            </Title>

                            <Subtitle
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                {Bio.description}
                            </Subtitle>

                            <RolesContainer
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                {Bio.roles.map((role, index) => (
                                    <RoleTag
                                        key={index}
                                        whileHover={{
                                            y: -8,
                                            background: "rgba(0,0,0,0.08)",
                                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                                        }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Zap size={18} />
                                        {role}
                                    </RoleTag>
                                ))}
                            </RolesContainer>

                            {/* <CTAContainer
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <PrimaryButton
                                    href={Bio.resume}
                                    target='display'
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 15px 35px rgba(0,0,0,0.15)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>
                                        View Resume <ExternalLink size={18} />
                                    </span>
                                </PrimaryButton>

                                <SecondaryButton
                                    href="#contact"
                                    whileHover={{
                                        scale: 1.05,
                                        background: "rgba(0,0,0,0.02)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>
                                        Contact Me <Mail size={18} />
                                    </span>
                                </SecondaryButton>
                            </CTAContainer> */}

                            {/* <SocialMediaContainer
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                {socialMedia.map((social, index) => (
                                    <SocialIcon
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            y: -10,
                                            scale: 1.1
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        animate={{
                                            y: [0, -8, 0],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            delay: index * 0.2
                                        }}
                                    >
                                        {social.icon}
                                    </SocialIcon>
                                ))}
                            </SocialMediaContainer> */}
                        </LeftContent>

                        <RightContent
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <ProfileWrapper>
                                <SkillOrbit
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                >
                                    {skillIcons.map((skill, index) => (
                                        <SkillIcon
                                            key={index}
                                            style={{
                                                transform: `rotate(${skill.angle}deg) translateX(250px) rotate(-${skill.angle}deg)`,
                                            }}
                                            whileHover={{
                                                scale: 1.2,
                                                background: "rgba(0,0,0,0.05)"
                                            }}
                                        >
                                            {skill.icon}
                                        </SkillIcon>
                                    ))}
                                </SkillOrbit>

                                <ProfileImage
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.8,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        rotate: [0, 2, 0, -2, 0],
                                        transition: {
                                            duration: 0.5,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }
                                    }}
                                >
                                    <ProfileImg src={HeroImg} alt="Profile" />

                                    {/* Glow effect */}
                                    <motion.div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            borderRadius: "50%",
                                            background: "rgba(0,0,0,0.05)",
                                            filter: "blur(20px)",
                                            zIndex: -1
                                        }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.5, 0.8, 0.5]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </ProfileImage>
                            </ProfileWrapper>
                        </RightContent>
                    </HeroContent>

                    <ScrollIndicator
                        onClick={scrollToNext}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span>Scroll Down</span>
                        <ChevronDown size={20} />
                    </ScrollIndicator>
                </HeroContainer>
            </div>
        </MainContainer>
    )
}

export default HeroSection