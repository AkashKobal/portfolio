import React from 'react'
import { skills } from '../../data/constants';
import { motion } from 'framer-motion';
import styled from "styled-components";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const SkillsContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    gap: 40px;
`;

const SkillsTitle = styled(motion.h1)`
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 5px;
        background: ${({ theme }) => theme.primary};
        border-radius: 5px;
    }
`;

const SkillsGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 25px;
    width: 100%;
    max-width: 1200px;
    
    @media (max-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 20px;
    }
`;

const SkillCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.01) 100%);
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 16px;
    padding: 20px;
    gap: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    height: 100%;
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        background: linear-gradient(145deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%);
    }
`;

const SkillImage = styled(motion.div)`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #844ce63a;
    padding: 10px;
    
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    
    @media (max-width: 640px) {
        width: 60px;
        height: 60px;
    }
`;

const SkillName = styled(motion.p)`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
`;

const Skills = () => {

  const [activeCategory, setActiveCategory] = useState(skills[0].title);

  // Find the data for the currently active category
  const activeSkillData = skills.find((cat) => cat.title === activeCategory);

  // ... new styled-components ...
  const TabContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

  const TabButton = styled(motion.button)`
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme, $isActive }) => ($isActive ? theme.white : theme.primary)};
  background: ${({ theme, $isActive }) => ($isActive ? theme.primary : 'transparent')};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme, $isActive }) => ($isActive ? theme.primary + 'D0' : theme.primary + '20')};
  }
`;

  return (
    <div id="skills">
      <SkillsContent>
        <SkillsTitle>My Technical Skills</SkillsTitle>

        {/* 1. Add the TabContainer */}
        <TabContainer>
          {skills.map((category) => (
            <TabButton
              key={category.title}
              $isActive={activeCategory === category.title}
              onClick={() => setActiveCategory(category.title)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </TabButton>
          ))}
        </TabContainer>

        {/* 2. Render only the active grid */}
        {/* Wrap the grid in AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <SkillsGrid
            key={activeCategory} // Key is crucial for AnimatePresence
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeSkillData.skills.map((skill, skillIndex) => (
              <SkillCard
                key={skillIndex}
              // ... (keep your existing SkillCard props)
              >
                <SkillImage>
                  <img src={skill.image} alt={skill.name} />
                </SkillImage>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </AnimatePresence>
      </SkillsContent>
    </div>
  )
}

export default Skills